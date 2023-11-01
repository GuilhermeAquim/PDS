from domain.ports.sale_repository import SaleRepository, ItemNotExists, UserNotExists
from domain.entities.item import Item
from adapter.base_sqlite import BaseSQLite

from datetime import datetime

class SaleRepositorySQLite(BaseSQLite, SaleRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)
        
    def search_sale(self, item_id= None, name=None) -> list[Item]:
        query = """
            SELECT * FROM items WHERE sold = 1
        """
        if item_id:
            query += f"AND item_id = {item_id}"
        if name:
            query += f"AND name LIKE '%{name}%'"
        
        rows = self.select_data(query)
        if rows:
            return [Item(*row) for row in rows]
        return []
    
    def sell_item(self, item_id, sale_price, sale_annotation, sale_user_id) -> bool:
        
        query = f""" SELECT id FROM items WHERE id = ? AND (sold is NULL OR sold != 1) AND approved = 1 LIMIT 1"""
        row = self.select_data(query,args=(item_id,), fetchone=True)
        if not row:
            raise ItemNotExists(f'Item {item_id} not exists.')
        
        query = f""" SELECT id FROM users WHERE id = ? LIMIT 1"""
        row = self.select_data(query, args=(sale_user_id,), fetchone=True)
        if not row:
            raise UserNotExists(f'User {sale_user_id} not exists.')
        query = f"""
            UPDATE items 
            SET 
                sale_price = {sale_price},
                sale_annotation = {"'" + sale_annotation + "'" if sale_annotation else 'NULL'},
                sale_user_id = {sale_user_id},
                sale_date = '{datetime.now()}',
                sold = 1
            WHERE 
                id = {item_id}
        """
        self.update_data(query)