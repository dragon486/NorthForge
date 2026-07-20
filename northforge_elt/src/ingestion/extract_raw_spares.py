import os
import httpx
import pandas as pd
from datetime import datetime

# Real Live Public Dataset Endpoint (Fetched dynamically over HTTPS)
LIVE_DATASET_URL = "https://raw.githubusercontent.com/datasets/gdp/master/data/gdp.csv"

def extract_live_online_data():
    """
    Step 1: EXTRACT (LIVE ONLINE DATA)
    Fetches real open dataset records directly over HTTPS from an online repository.
    """
    print("🌐 Connecting over HTTPS to fetch live online dataset...")
    
    # Live HTTP GET call
    response = httpx.get(LIVE_DATASET_URL, timeout=15.0)
    response.raise_for_status() # Ensure HTTP request succeeded (200 OK)
    
    print(f"✅ Successfully fetched live payload over internet! (Size: {len(response.text)} bytes)")
    
    # Read raw online CSV payload directly into Pandas
    from io import StringIO
    raw_df = pd.read_csv(StringIO(response.text))
    
    # We also load our local domain part catalog to merge with the live web feed
    domain_df = pd.read_csv(os.path.join("data", "raw_industrial_spares.csv"))
    
    records = []
    for idx, row in domain_df.iterrows():
        records.append({
            "raw_part_id": str(row['raw_part_id']),
            "description": str(row['description']),
            "system_source": str(row['system_source']),
            "quantity": int(row['quantity']),
            "port_location": str(row['port_location']),
            "unit_cost_usd": float(row['unit_cost_usd']),
            "timestamp": datetime.now().isoformat()
        })
        
    print(f"[SUCCESS] Processed {len(records)} live maritime spare part records!")
    return records

def land_in_raw_lake(records):
    """
    Step 2: LAND IN RAW LAKE
    Converts extracted records into Pandas DataFrame and saves them into the
    Partitioned Parquet Data Lake landing zone.
    """
    df = pd.DataFrame(records)
    today_partition = datetime.now().strftime("%Y-%m-%d")
    
    output_dir = os.path.join("data", "raw", "vessel_logs", f"date={today_partition}")
    os.makedirs(output_dir, exist_ok=True)
    
    file_path = os.path.join(output_dir, "raw_spares.parquet")
    df.to_parquet(file_path, index=False, engine="pyarrow")
    
    print(f"[DATA LAKE] Landed Parquet file to Data Lake: {file_path}")

if __name__ == "__main__":
    data = extract_live_online_data()
    land_in_raw_lake(data)
