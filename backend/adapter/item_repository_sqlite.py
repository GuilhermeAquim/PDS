from domain.ports.item_repository import ItemRepository, ItemNotFound
from domain.entities.item import Item
from adapter.base_sqlite import BaseSQLite


class ItemRepositorySQLite(BaseSQLite, ItemRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def search_item(self, name = None, item_id = None) -> list[Item]:
        query = """SELECT * FROM items WHERE (sold IS NULL OR sold != 1 ) AND approved = 1"""
        if item_id:
            query += f" AND id = {item_id}"
        if name:
            query += f" AND name LIKE '%{name}%'"
        
        rows = self.select_data(query)
        if rows:
            return [Item(*row) for row in rows]
        return []
    
    def remove_item(self, item_id) -> bool:
        row = self.search_item(item_id)
        if not row:
            raise ItemNotFound(f"Item {item_id} not found")
        
        query = f"""DELETE FROM items WHERE id = ?"""
        args = (item_id,)

        self.delete_data(query, args)
        return True


    def update_item(self, item_id, name, icon, year, color, manufacturer, proposed_date, proposal_user_id, annotation, purchase_price, sale_price, sold, sale_date, sale_annotation, sale_user_id) -> bool:
        args = []
        update_parts = []

        if name is not None:
            update_parts.append("name = ?")
            args.append(name)
        if year is not None:
            update_parts.append("year = ?")
            args.append(year)
        if icon is not None:
            update_parts.append("icon = ?")
            args.append(icon)
        if color is not None:
            update_parts.append("color = ?")
            args.append(color)
        if manufacturer is not None:
            update_parts.append("manufacturer = ?")
            args.append(manufacturer)
        if proposed_date is not None:
            update_parts.append("proposed_date = ?")
            args.append(proposed_date)
        if proposal_user_id is not None:
            update_parts.append("proposal_user_id = ?")
            args.append(proposal_user_id)
        if annotation is not None:
            update_parts.append("annotation = ?")
            args.append(annotation)
        if purchase_price is not None:
            update_parts.append("purchase_price = ?")
            args.append(purchase_price)
        if sale_price is not None:
            update_parts.append("sale_price = ?")
            args.append(sale_price)
        if sold is not None:
            update_parts.append("sold = ?")
            args.append(sold)
        if sale_date is not None:
            update_parts.append("sale_date = ?")
            args.append(sale_date)
        if sale_annotation is not None:
            update_parts.append("sale_annotation = ?")
            args.append(sale_annotation)
        if sale_user_id is not None:
            update_parts.append("sale_user_id = ?")
            args.append(sale_user_id)

        # Verify if there is any field to update
        if not update_parts:
            return False

        query = "UPDATE items SET " + ", ".join(update_parts) + " WHERE id = ?"
        args.append(item_id)
        self.update_data(query, args)
        return True