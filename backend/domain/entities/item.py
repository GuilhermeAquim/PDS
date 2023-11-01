from dataclasses import dataclass
from datetime import datetime

@dataclass
class Item:
    id_: int
    name: str
    icon: str
    year: int
    color: str
    manufacturer: str
    approved_date: datetime
    approved: bool
    proposed_date: datetime
    proposal_user_id: int
    annotation: str
    purchase_price: float
    sale_price: float
    sold: bool
    sale_date: datetime
    sale_annotation: str
    sale_user_id: int

    def get_suggested_price(self, expenses):
        return (self.purchase_price + sum([i[0] for i in expenses])) * 1.5
