import duckdb

# Connect to DuckDB in memory and query the raw parquet files
conn = duckdb.connect()
df = conn.execute("""
    SELECT 
        description, 
        system_source, 
        port_location, 
        unit_cost_usd 
    FROM read_parquet('data/raw/vessel_logs/*/*.parquet')
""").df()

print("\n--- RAW PARQUET DATA IN DUCKDB DATA LAKE ---")
print(df)
print("---------------------------------------------\n")
