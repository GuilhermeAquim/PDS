import sqlite3

class BaseSQLite:
    def __init__(self, database_path) -> None:
        self.db_path = database_path
        

        
    def select_data(self, query, args, fetchone = False):
        """ Perform a SQL SELECT QUERY

        Args:
            query (str): query to be performed
            args (tuple): args to fill query
            fetchone (bool, optional): Wheter to return only first match. Defaults to False.

        Returns:
            list: found data
        """
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(query, args)
            if fetchone:
                return cursor.fetchone()
            return cursor.fetchall()
        
    def insert_data(self, insert_query, args):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(insert_query, args)
            conn.commit()
            return cursor.lastrowid
        
    def update_data(self, update_query, args):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(update_query, args)
            conn.commit()
            
    def delete_date(self, delete_query, args):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(delete_query, args)
            conn.commit()