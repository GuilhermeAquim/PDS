from dataclasses import dataclass

@dataclass
class User:
    id_: int
    login: str
    password: str
    admin: bool
