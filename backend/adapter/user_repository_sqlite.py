from domain.ports.user_repository import UserRepository, UserNotFoundError, UserAlreadyExists
from domain.entities.user import User
from adapter.base_sqlite import BaseSQLite


class UserRepositorySQLite(BaseSQLite, UserRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def create_user(self, session_user_id: int, login: str, password: str, admin: bool):
        user = self.get_user_by_id(session_user_id)
        if not user.admin:
            raise PermissionError
        
        try:
            self.get_user_by_login(login)
            raise UserAlreadyExists() 
        except UserNotFoundError:
            pass
            

        query = "INSERT INTO users (login, password, admin) VALUES (?, ?, ?)"
        args = (login, password, int(admin))

        return self.insert_data(query, args)

    def get_user_by_id(self, user_id: int):
        query = "SELECT id, login, password, admin FROM users WHERE id = ?"
        args = (str(user_id))
        row = self.select_data(query, args, fetchone=True)
        if row:
            return User(*row)
        raise UserNotFoundError

    def get_user_by_login(self, login: str):
        query = "SELECT id, login, password, admin FROM users WHERE login = ?"
        args = (login, )
        row = self.select_data(query, args, fetchone=True)
        if row:
            return User(*row)
        raise UserNotFoundError


    def set_admin_value(self, login:str, admin:bool):
        query = "UPDATE users SET admin = ? WHERE login = ?"
        args = (int(admin), login)
        self.update_data(query, args)