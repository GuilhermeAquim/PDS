import sys
sys.path.append('backend')

TEST_DB_FILE = 'tests/data/test.db'

import sqlite3
import os


if os.path.isfile(TEST_DB_FILE):
    os.remove(TEST_DB_FILE)

conn = sqlite3.connect(TEST_DB_FILE)
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

# ITEMS TABLE
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

# EXPENSES TABLE
cursor.execute("""
    CREATE TABLE expenses (
        id INTEGER PRIMARY KEY,
        expense_register_date DATETIME NOT NULL,
        expense_annotation INTEGER NOT NULL,
        item_id INTEGER NOT NULL,
        expense_price REAL NOT NULL,
        expense_register_user_id INTEGER NOT NULL,

        FOREIGN KEY (item_id) REFERENCES items (id),
        FOREIGN KEY (expense_register_user_id) REFERENCES users (id) 
    )
""")

conn.commit()
cursor.close()
conn.close()