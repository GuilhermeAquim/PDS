import sqlite3
import os

DB_PATH = r'infrastructure/database.db'

if os.path.isfile(DB_PATH):
    choice = input('DB already exists. Do you want do recreate? (All data will be lost) [y/n]: ')
    if choice not in ['y', 'yes', 'Yes']:
        exit(0)

    print('Recreating DB...')
else:
    print('Creating DB...')
  
os.remove(DB_PATH)
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()

# USERS TABLE
cursor.execute("""
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        login TEXT NOT NULL,
        password TEXT NOT NULL,
        admin INTEGER
    )
""")
cursor.execute("""
    CREATE TABLE items (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        icon TEXT,
        inserted_date DATETIME NOT NULL,
        approved INTEGER NOT NULL, 
        proposed_date DATETIME NOT NULL,
        annotation TEXT,
        sold INTEGER,
        sale_date DATETIME
    )
""")

conn.commit()
cursor.close()
conn.close()