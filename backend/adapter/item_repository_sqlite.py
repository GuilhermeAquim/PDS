from domain.ports.item_repository import ItemRepository
from domain.entities.item import Item
from adapter.base_sqlite import BaseSQLite


class ItemRepositorySQLite(BaseSQLite, ItemRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def search_item(self, name = None, item_id = None) -> list[Item]:
        # return items that match name/item_id or all of them if both = None
        query = """SELECT * FROM items"""
        if item_id and name:
            query += f" WHERE item_id = {item_id} AND name LIKE '%{name}%'"
        elif item_id:
            query += f" WHERE item_id = {item_id}"
        elif name:
            query += f" WHERE name LIKE '%{name}%'"
        
        rows = self.select_data(query)
        if rows:
            return [Item(*row) for row in rows]
        return []
    
    def remove_item(self, item_id) -> bool:
        # delete row where item_id = x
        query = f"""DELETE FROM items WHERE item_id = {item_id}"""
        args = (item_id,)

        try:
            self.delete_data(query, args)
            return True
        except Exception as e:
            return False

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