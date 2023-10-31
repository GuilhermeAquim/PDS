from abc import abstractmethod, ABC
from domain.entities.user import Item

class ProposalRepository(ABC):
    
    @abstractmethod
    def search_proposal(self, name = None, item_id = None):
        pass
    
    @abstractmethod
    def deny_item(self, item_id) -> bool:
        pass
    
    @abstractmethod
    def sell_item(self, item_id, value) -> bool:
        pass