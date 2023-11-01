import pandas as pd
import sqlite3

DB_PATH = r'infrastructure/database.db'
conn = sqlite3.connect(DB_PATH)

print('USERS:')
print(pd.read_sql_query('SELECT * FROM users', conn))

print('\nITEMS')
print(pd.read_sql_query('SELECT * FROM items WHERE approved = 1 and (sold IS NULL or sold != 1)', conn))

print('\nPROPOSALS')
print(pd.read_sql_query('SELECT * FROM items WHERE approved IS NULL', conn))

print('\nSALES')
print(pd.read_sql_query('SELECT * FROM items WHERE sold = 1', conn))