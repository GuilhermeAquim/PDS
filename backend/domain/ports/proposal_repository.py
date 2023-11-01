from abc import abstractmethod, ABC
from domain.entities.item import Item

class ProposalRepository(ABC):
    
    @abstractmethod
    def search_proposal(self, name = None, item_id = None) -> list[Item]:
        # list proposals that matches name/item_id received or all of them if both = None
        # proposal: items where approved = null
        pass
    
    @abstractmethod
    def create_proposal(self, name, icon, year, color, manufacturer, proposed_date, proposal_user_id, annotation, purchase_price, sale_price, sale_user_id) -> int:
        # create a new item with proposal info
        pass
    
    @abstractmethod
    def deny_proposal(self, item_id) -> bool:
        # set item approved = 0
        pass
    
    @abstractmethod
    def approve_proposal(self, item_id) -> bool:
        # set item approved = 1
        pass
    
    @abstractmethod
    def update_proposal(self) -> bool:
        # update proposal fields based on args received
        pass