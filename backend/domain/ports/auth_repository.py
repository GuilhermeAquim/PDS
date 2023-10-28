from abc import abstractmethod, ABC

class AuthenticationError(Exception):
    pass
    

class AuthRepository(ABC):
    
    @abstractmethod
    def login(self, login: str, password: str) -> str:
        pass

    @abstractmethod
    def validate_token(self, token: str) -> dict:
        pass

    @abstractmethod
    def refresh_token(self, token: str) -> str:
        pass