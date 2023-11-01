from domain.ports.proposal_repository import ProposalRepository
from domain.entities.item import Item
from adapter.base_sqlite import BaseSQLite

from datetime import datetime

class ProposalRepositorySQLite(BaseSQLite, ProposalRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def search_proposal(self, name = None, item_id = None) -> list[Item]:
        # list proposals that matches name/item_id received or all of them if both = None
        # proposal: items where approved = null
        query = """SELECT * FROM items WHERE approved is NULL"""
        if item_id:
            query += f" AND id = {item_id}"
        if name:
            query += f" AND name LIKE '%{name}%'"
        
        rows = self.select_data(query)
        if rows:
            return [Item(*row) for row in rows]
        return []
    
    def create_proposal(self, name, icon, year, color, manufacturer, proposal_user_id, annotation, purchase_price, sale_price, sale_user_id) -> int:
        # create a new item with proposal info

        proposed_date = str(datetime.now())
        args = (name, icon, year, color, manufacturer, proposed_date, proposal_user_id, annotation, purchase_price, sale_price, sale_user_id)
        insert_fields = ["name", "icon", "year", "color", "manufacturer", "proposed_date", "proposal_user_id", "annotation", "purchase_price", "sale_price", "sale_user_id"]

        query = f"INSERT INTO items ({', '.join(insert_fields)}) VALUES ({', '.join(['?'] * len(insert_fields))})"

        return self.insert_data(query, args)
    
    def deny_proposal(self, item_id) -> bool:
        approved = 0

        query = "UPDATE items SET approved = %s WHERE id_ = %s"
        args = (approved, item_id)

        self.update_data(query, args)
        return True
    
    def approve_proposal(self, item_id) -> bool:
        approved = 1

        query = "UPDATE items SET approved = %s WHERE id_ = %s"
        args = (approved, item_id)

        self.update_data(query, args)
        return True
    
    def update_proposal(self, item_id, name, icon, year, color, manufacturer, proposed_date, proposal_user_id, annotation, purchase_price, sale_price, sale_user_id) -> bool:
        self.approved = None

        args = (name, icon, year, color, manufacturer, proposed_date, proposal_user_id, annotation, purchase_price, sale_price, sale_user_id, item_id)
        update_fields = ["name", "icon", "year", "color", "manufacturer", "proposed_date", "proposal_user_id", "annotation", "purchase_price", "sale_price", "sale_user_id"]

        query = f"UPDATE items SET {', '.join([f'{field} = %s' for field in update_fields])} WHERE approved = null AND id_ = %s"

        self.update_data(query, args)
        return True