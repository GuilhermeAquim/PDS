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
            query += f"AND name LIKE '{name}'"
        
        row = self.select_data(query, args= None)
        if row:
            return Item(*row)
        raise SaleNotFound(f"Sale id: {item_id} | name: {name} not found")