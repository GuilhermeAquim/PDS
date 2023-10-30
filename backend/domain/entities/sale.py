from dataclasses import dataclass
from datetime import datetime

@dataclass
class Sale:
    id_: int
    user_id: int
    value: float
    date: datetime
    annotation: str
