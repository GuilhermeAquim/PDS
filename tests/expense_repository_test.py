import unittest
from unittest.mock import MagicMock
import sys
from datetime import datetime

sys.path.append('..')
from backend.adapter.expense_repository_sqlite import ExpenseRepositorySQLite



class TestExpenseRepository(unittest.TestCase):
    def test_create_expense(self):
        mock_conn = MagicMock()

        insert_fields = ["expense_register_date", "expense_annotation", "item_id", "expense_price", "expense_register_user_id"]
        sql = f"INSERT INTO expenses ({', '.join(insert_fields)}) VALUES ({', '.join(['?'] * len(insert_fields))})"

        expense_example = (str(datetime.now()), 'expenseTest', 1, 250, 1)
        mock_conn.cursor.return_value.lastrowid = 1
        expense_repository = ExpenseRepositorySQLite(mock_conn)
        
        self.assertEqual(expense_repository.create_expense(expense_example, mock_conn), 1)
        mock_conn.cursor.return_value.execute.assert_called_once_with(sql, expense_example)
