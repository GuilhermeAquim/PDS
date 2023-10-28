from domain.ports.user_repository import UserRepository, UserNotFoundError
from domain.ports.auth_repository import AuthRepository, AuthenticationError

import jwt
from datetime import datetime, timedelta, timezone

SECRET = 'secret123'
TOKEN_TIME_DURATION = 1800


class AuthRepositoryJwt(AuthRepository):
    
    def __init__(self, user_rep : UserRepository) -> None:
        self._user_rep = user_rep
    
    @staticmethod
    def _create_token():
        token = jwt.encode(
            payload={'exp' : datetime.now(timezone.utc) + timedelta(seconds=TOKEN_TIME_DURATION)},
            key=SECRET
            )
        return token
    
    def login(self, login: str, password: str) -> str:
        try:
            user = self._user_rep.get_user_by_login(login=login)
        except UserNotFoundError:
            raise AuthenticationError("User not found.")
        if user.password == password:
            return self._create_token()
        raise AuthenticationError("Login failed.")

    def validate_token(self, token: str) -> int:
        try:
            return jwt.decode(token, key=SECRET, algorithms=['HS256'])['exp']
        except jwt.ExpiredSignatureError as e:
            raise AuthenticationError(e.args[0])
        
    def refresh_token(self, token: str) -> str:
        return self._create_token()