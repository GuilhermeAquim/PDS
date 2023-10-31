from abc import abstractmethod, ABC
from domain.entities.user import Item

class ItemRepository(ABC):
    @abstractmethod
    def search_item(self, name):
        pass
    
    @abstractmethod
    def add_item(self, name, icon, year, color, manufacturer, annotation, purchase_price) -> int:
        pass
    
    @abstractmethod
    def remove_item(self) -> bool:
        pass

