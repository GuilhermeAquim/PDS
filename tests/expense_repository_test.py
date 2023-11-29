import tests.setup_test
import unittest
from unittest.mock import MagicMock
from datetime import datetime

from backend.adapter.expense_repository_sqlite import ExpenseRepositorySQLite



class TestExpenseRepository(unittest.TestCase):
    def test_create_expense(self):
        mock_conn = MagicMock()

        expense_repository = ExpenseRepositorySQLite(tests.setup_test.TEST_DB_FILE)
        expense_repository.insert_data = MagicMock()

        expense_repository.create_expense(
            expense_annotation='foo',
            expense_price=1,
            expense_register_user_id=1,
            item_id=1
        )
        expense_repository.insert_data.assert_called()

