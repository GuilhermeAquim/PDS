from domain.ports.sale_repository import SaleRepository, SaleNotFound
from domain.entities.item import Item
from adapter.base_sqlite import BaseSQLite


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
    
    def sell_item(self, item_id, value) -> bool:
        return super().sell_item(item_id, value)