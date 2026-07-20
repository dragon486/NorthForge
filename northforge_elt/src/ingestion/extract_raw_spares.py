import os
import pandas as pd
from datetime import datetime

def extract_maritime_sources():
    """
    Step 1: EXTRACT
    Simulates fetching raw, inconsistent spare part records from 4 different 
    maritime systems across NorthForge's fleet.
    """
    raw_records = [
        {
            "raw_part_id": "V3-FP-01",
            "description": "Fuel Pu.",
            "system_source": "Vessel_3_Excel",
            "quantity": 4,
            "port_location": "Singapore",
            "unit_cost_usd": 4200.00,
            "timestamp": "2026-07-20T08:00:00Z"
        },
        {
            "raw_part_id": "WH-BIN-22",
            "description": "FP-2200",
            "system_source": "Warehouse_Tag",
            "quantity": 2,
            "port_location": "Dubai",
            "unit_cost_usd": 4200.00,
            "timestamp": "2026-07-20T08:15:00Z"
        },
        {
            "raw_part_id": "INV-FR-99",
            "description": "Pompe à Carburant",
            "system_source": "Vessel_1_Invoice",
            "quantity": 7,
            "port_location": "Rotterdam",
            "unit_cost_usd": 4150.00,
            "timestamp": "2026-07-20T08:30:00Z"
        },
        {
            "raw_part_id": "V4-PMS-77",
            "description": "Pump, Fuel Inj.",
            "system_source": "Vessel_4_PMS",
            "quantity": 1,
            "port_location": "Singapore",
            "unit_cost_usd": 4300.00,
            "timestamp": "2026-07-20T08:45:00Z"
        },
        {
            "raw_part_id": "V2-FIL-10",
            "description": "Oil Filter Element",
            "system_source": "Vessel_2_Excel",
            "quantity": 15,
            "port_location": "Rotterdam",
            "unit_cost_usd": 120.00,
            "timestamp": "2026-07-20T09:00:00Z"
        },
        {
            "raw_part_id": "ERP-FIL-11",
            "description": "Filter, Lube Oil",
            "system_source": "ERP_Main",
            "quantity": 30,
            "port_location": "Singapore",
            "unit_cost_usd": 118.00,
            "timestamp": "2026-07-20T09:15:00Z"
        }
    ]
    return raw_records

def land_in_raw_lake(records):
    """
    Step 2: LAND IN RAW LAKE
    Converts raw records into a Pandas DataFrame and saves them as a 
    Partitioned Parquet file in the Raw Data Lake zone.
    """
    # 1. Convert python list of dictionaries to Pandas DataFrame
    df = pd.DataFrame(records)
    
    # 2. Get today's date formatted as YYYY-MM-DD for partitioning
    today_partition = datetime.now().strftime("%Y-%m-%d")
    
    # 3. Construct the partitioned directory path
    output_dir = os.path.join("data", "raw", "vessel_logs", f"date={today_partition}")
    
    # 4. Create directory if it doesn't already exist
    os.makedirs(output_dir, exist_ok=True)
    
    # 5. Define full Parquet file path
    file_path = os.path.join(output_dir, "raw_spares.parquet")
    
    # 6. Write to Parquet using the pyarrow engine
    df.to_parquet(file_path, index=False, engine="pyarrow")
    
    print(f"✅ [STEP 1 & 2 SUCCESS] Extracted {len(df)} records.")
    print(f"📦 Landed raw Parquet file to Data Lake: {file_path}")

if __name__ == "__main__":
    data = extract_maritime_sources()
    land_in_raw_lake(data)
