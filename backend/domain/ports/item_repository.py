from abc import abstractmethod, ABC
from domain.entities.item import Item

class ItemNotFound(Exception):
    pass

class ItemRepository(ABC):
    @abstractmethod
    def search_item(self, name = None, item_id = None) -> list[Item]:
        # return items that match name/item_id or all of them if both = None
        # only items that werent sold yet
        pass
    
    @abstractmethod
    def remove_item(self, item_id) -> bool:
        # delete row where item_id = x
        pass

    @abstractmethod
    def update_item(self) -> bool:
        # update item fields with given values of args
        pass