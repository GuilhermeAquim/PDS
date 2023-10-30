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
    inserted_date: datetime
    approved: bool
    proposed_date: datetime
    annotation: str
    purchase_price: float
    sale_price: float
    sold: bool
    sale_date: datetime
    sale_annotation: str
    sale_user_id: int