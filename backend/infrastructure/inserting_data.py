import sqlite3
import os

DB_PATH = r'infrastructure/database.db'

if not os.path.isfile(DB_PATH):
    print('DB does not exists.')
    exit(1)
    
    
QUERIES = ["""
    INSERT INTO users (login, password, admin)
    VALUES 
        ('admin', 'senha', 1),
        ('user', 'senha', 0)
    """,
    """ 
    INSERT INTO items (name, inserted_date, approved, proposed_date)
    VALUES
        ('carro 1', '2023-01-01 00:00:01', 1, '2022-01-01 00:00:00'),
        ('carro 2', '2023-01-02 00:01:01', 1, '2022-01-02 00:01:00'),
        ('carro 3', '2023-01-03 00:02:01', 1, '2022-01-03 00:02:00'); 
"""
]
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()
for query in QUERIES:
    cursor.execute(query)
conn.commit()
cursor.close()
conn.close()