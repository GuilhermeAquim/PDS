import sqlite3
import os

DB_PATH = os.path.join('infrastructure', 'database.db')

if os.path.isfile(DB_PATH):
    choice = input('DB already exists. Do you want do recreate? (All data will be lost) [y/n]: ')
    if choice not in ['y', 'yes', 'Yes']:
        exit(0)

    os.remove(DB_PATH)
    print('Recreating DB...')
else:
    print('Creating DB...')
  
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
        year INTEGER,
        color TEXT,
        manufacturer TEXT,
        approved_date DATETIME,
        approved INTEGER, 
        proposed_date DATETIME NOT NULL,
        proposal_user_id INTEGER NOT NULL,
        annotation TEXT,
        purchase_price REAL NOT NULL,
        sold INTEGER,
        sale_price REAL,
        sale_date DATETIME,
        sale_annotation TEXT,
        sale_user_id INTEGER,
        
        FOREIGN KEY (sale_user_id) REFERENCES users (id),
        FOREIGN KEY (proposal_user_id) REFERENCES users (id) 
    )
""")

conn.commit()
cursor.close()
conn.close()