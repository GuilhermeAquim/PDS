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
    INSERT INTO items (name, approved_date, proposed_date, proposal_user_id, purchase_price )
    VALUES
        ('carro 1', '2023-01-01 00:00:01', '2022-01-01 00:00:00', 1, 123.4),
        ('carro 2', '2023-01-02 00:01:01', '2022-01-02 00:01:00', 2, 100.0),
        ('carro 3', '2023-01-03 00:02:01', '2022-01-03 00:02:00', 2, 100.1); 
    """,
    """ 
    INSERT INTO items (name, approved_date, proposed_date, proposal_user_id, purchase_price, sold)
    VALUES
        ('carro 4', '2023-01-01 00:00:01', '2022-01-01 00:00:00', 1, 123.4, 1),
        ('carro 5', '2023-01-02 00:01:01', '2022-01-02 00:01:00', 2, 100.0, 1)
    """,
    """ 
    INSERT INTO expenses (expense_register_date, expense_annotation, item_id, expense_price, expense_register_user_id)
    VALUES
        ('2023-02-15 10:45:01', 'Manutenção', 1, 230.0, 2),
        ('2023-04-30 11:20:37', 'Troca Pneus', 3, 450.0, 2)
    """

]
conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()
for query in QUERIES:
    cursor.execute(query)
conn.commit()
cursor.close()
conn.close()