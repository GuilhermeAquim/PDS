from dataclasses import dataclass
from datetime import datetime

@dataclass
class Expense:
    id_: int
    expense_date: datetime
    description: str
    item_id: int
    register_user_id: int
