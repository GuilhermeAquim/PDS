from abc import abstractmethod, ABC
from domain.entities.user import User

class UserNotFoundError(Exception):
    pass

class UserAlreadyExists(Exception):
    pass

class UserRepository(ABC):
    
    @abstractmethod
    def create_user(self, session_user_id: int, login: str, password: str, admin: bool) -> int:
        pass
    
    @abstractmethod
    def remove_user(self, session_user_id: int, to_remove_user_id: int):
        pass

    @abstractmethod
    def get_user_by_id(self, user_id: int) -> User:
        pass

    @abstractmethod
    def get_user_by_login(self, login: str) -> User:
        pass
    
    @abstractmethod
    def set_admin_value(self, session_user_id: int, new_admin_user_id: int, value: bool):
        pass