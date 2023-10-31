from abc import abstractmethod, ABC
from domain.entities.item import Item


class ItemNotExists(Exception):
    pass

class UserNotExists(Exception):
    pass

class SaleRepository(ABC):
    
    @abstractmethod
    def search_sale(self, item_id = None, name = None) -> list[Item]:
        # list all items sold that match name/item_id or all of them if both = None
        pass

    @abstractmethod
    def sell_item(self, item_id, value) -> bool:
        # set item sold = 1 and all others sale fields from item
        # return True if succeed
        pass