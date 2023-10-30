from dataclasses import dataclass
from datetime import datetime

@dataclass
class Item:
    id_: int
    name: str
    icon: str
    inserted_date: datetime
    pendent: bool
    proposed_date: datetime
    annotation: str
