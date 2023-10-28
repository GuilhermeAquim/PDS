import sqlite3
import os

DB_PATH = r'infrastrucutre/database.db'

if os.path.isfile(DB_PATH):
    choice = input('DB already exists. Do you want do recreate? (All data will be lost) [y/n]: ')
    if choice not in ['y', 'yes', 'Yes']:
        exit(0)

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

conn.commit()
cursor.close()
conn.close()