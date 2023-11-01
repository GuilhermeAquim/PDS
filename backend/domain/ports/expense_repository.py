from abc import abstractmethod, ABC
from domain.entities.expense import Expense

class ExpenseNotFound(Exception):
    pass

class ExpenseRepository(ABC):
    
    @abstractmethod
    def search_expense(self, item_id = None) -> list[Expense]:
        # list proposals that matches name/item_id received or all of them if both = None
        # proposal: items where approved = null
        pass
    
    @abstractmethod
    def create_expense(self, expense_annotation, item_id, expense_price, expense_register_user_id) -> int:
        # create a new item with proposal info
        pass
       