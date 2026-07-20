import os
import duckdb

def inspect_raw_parquet_lake():
    lake_pattern = os.path.join("data", "raw", "vessel_logs", "*", "*.parquet")
    
    conn = duckdb.connect()
    df = conn.execute(f"""
        SELECT 
            raw_part_id,
            description, 
            system_source, 
            port_location, 
            unit_cost_usd 
        FROM read_parquet('{lake_pattern}')
    """).df()
    
    print("\n--- DUCKDB DATA LAKE QUERY RESULT ---")
    print(df.to_string(index=False))
    print("-------------------------------------\n")

if __name__ == "__main__":
    inspect_raw_parquet_lake()
