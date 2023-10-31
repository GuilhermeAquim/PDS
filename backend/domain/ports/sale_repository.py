from abc import abstractmethod, ABC
from domain.entities.user import Item

class SaleRepository(ABC):
    
    @abstractmethod
    def search_sale(self, item_id = None, name = None):
        pass
    
    @abstractmethod
    def sell_item(self, item_id, value) -> bool:
        pass