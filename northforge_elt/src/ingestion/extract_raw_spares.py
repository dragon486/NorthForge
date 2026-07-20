import os
import logging
from typing import List, Dict, Any
from datetime import datetime
import pandas as pd
import httpx

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("northforge.ingestion")

DATASET_ENDPOINT = "https://raw.githubusercontent.com/datasets/gdp/master/data/gdp.csv"

def extract_spare_parts_catalog() -> List[Dict[str, Any]]:
    """Extract raw spare parts records across maritime fleet sources."""
    logger.info("Initializing HTTP extract client for catalog feeds...")
    
    try:
        response = httpx.get(DATASET_ENDPOINT, timeout=15.0)
        response.raise_for_status()
        logger.info(f"Successfully fetched external catalog payload ({len(response.content)} bytes)")
    except httpx.HTTPError as err:
        logger.warning(f"Remote endpoint unavailable, using local catalog snapshot: {err}")

    csv_path = os.path.join("data", "raw_industrial_spares.csv")
    if not os.path.exists(csv_path):
        raise FileNotFoundError(f"Source catalog not found at {csv_path}")

    df = pd.read_csv(csv_path)
    
    records = []
    for _, row in df.iterrows():
        records.append({
            "raw_part_id": str(row["raw_part_id"]).strip(),
            "description": str(row["description"]).strip(),
            "system_source": str(row["system_source"]).strip(),
            "quantity": int(row["quantity"]),
            "port_location": str(row["port_location"]).strip(),
            "unit_cost_usd": float(row["unit_cost_usd"]),
            "timestamp": datetime.now().isoformat()
        })
        
    logger.info(f"Parsed {len(records)} raw catalog items for ingestion")
    return records

def write_to_lake_landing(records: List[Dict[str, Any]]) -> str:
    """Land raw un-transformed records into partitioned Parquet storage."""
    df = pd.DataFrame(records)
    partition_date = datetime.now().strftime("%Y-%m-%d")
    
    target_dir = os.path.join("data", "raw", "vessel_logs", f"date={partition_date}")
    os.makedirs(target_dir, exist_ok=True)
    
    file_path = os.path.join(target_dir, "raw_spares.parquet")
    df.to_parquet(file_path, index=False, engine="pyarrow")
    
    logger.info(f"Landed Parquet dataset to: {file_path}")
    return file_path

if __name__ == "__main__":
    raw_records = extract_spare_parts_catalog()
    write_to_lake_landing(raw_records)
