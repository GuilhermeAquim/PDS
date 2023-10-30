from dataclasses import dataclass

@dataclass
class Expense:
    id_: int
    desc: str
    item_id: int
    cost: float
