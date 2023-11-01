from dataclasses import dataclass
from datetime import datetime

@dataclass
class Expense:
    id_: int
    expense_register_date: datetime
    expense_annotation: str
    item_id: int
    expense_price: float
    expense_register_user_id: int
