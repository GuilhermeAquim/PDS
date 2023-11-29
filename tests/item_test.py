import unittest
import tests.setup_test
from domain.entities.item import Item

class TestItem(unittest.TestCase):
    def test_suggested_price(self):
        item = Item(
                id_ = None,
            name = None,
            icon = None,
            year = None,
            color = None,
            manufacturer = None,
            approved_date = None,
            approved = None,
            proposed_date = None,
            proposal_user_id = None,
            annotation = None,
            sale_price = None,
            sold = None,
            sale_date = None,
            sale_annotation = None,
            sale_user_id = None,
            purchase_price=100
        )
        self.assertEqual(item.get_suggested_price(expenses=[(50, 'a'), (50, 'b')]), 300.0)
