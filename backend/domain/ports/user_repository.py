from abc import abstractmethod, ABC
from domain.entities.user import User

class UserNotFoundError(Exception):
    pass

class UserRepository(ABC):
    
    @abstractmethod
    def create_user(self, login: str, password: str) -> int:
        pass

    @abstractmethod
    def get_user_by_id(self, user_id: int) -> User:
        pass

    @abstractmethod
    def get_user_by_login(self, login: str) -> User:
        pass