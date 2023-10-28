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
    def _create_token(user_id):
        token = jwt.encode(
            payload={
                'exp' : datetime.now(timezone.utc) + timedelta(seconds=TOKEN_TIME_DURATION),
                'user_id': user_id
                },
            key=SECRET
            )
        return token
    
    def login(self, login: str, password: str) -> str:
        try:
            user = self._user_rep.get_user_by_login(login=login)
        except UserNotFoundError as exc:
            raise AuthenticationError("User not found.") from exc
        if user.password == password:
            return self._create_token(user.id_)
        raise AuthenticationError("Login failed.")

    def validate_token(self, token: str) -> dict:
        try:
            return jwt.decode(token, key=SECRET, algorithms=['HS256'])
        except jwt.ExpiredSignatureError as e:
            raise AuthenticationError(e.args[0])
        
    def refresh_token(self, token: str) -> str:
        return self._create_token(user_id=self.validate_token(token)['user_id'])