from domain.ports.expense_repository import ExpenseRepository, ExpenseNotFound
from domain.entities.expense import Expense
from adapter.base_sqlite import BaseSQLite

from datetime import datetime

class ExpenseRepositorySQLite(BaseSQLite, ExpenseRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def search_expense(self, item_id = None) -> list[Expense]:
        # list proposals that matches name/item_id received or all of them if both = None
        # proposal: items where approved = null
        query = f"""SELECT * FROM expenses WHERE item_id = ?"""
        args = (item_id,)
        
        rows = self.select_data(query, args)
        if rows:
            return [Expense(*row) for row in rows]
        return []
    
    def create_expense(self, expense_annotation, item_id, expense_price, expense_register_user_id) -> int:
        # create a new item with proposal info

        expense_register_date = str(datetime.now())
        args = (expense_register_date, expense_annotation, item_id, expense_price, expense_register_user_id)
        insert_fields = ["expense_register_date", "expense_annotation", "item_id", "expense_price", "expense_register_user_id"]

        query = f"INSERT INTO expenses ({', '.join(insert_fields)}) VALUES ({', '.join(['?'] * len(insert_fields))})"

        return self.insert_data(query, args)
