from domain.ports.user_repository import UserRepository, UserNotFoundError, UserAlreadyExists
from domain.entities.user import User
from adapter.base_sqlite import BaseSQLite


class UserRepositorySQLite(BaseSQLite, UserRepository):
    def __init__(self, database_path) -> None:
        super().__init__(database_path)

    def _validate_admin(self, user_id):
        user = self.get_user_by_id(user_id)
        return user.admin
    
    def create_user(self, session_user_id: int, login: str, password: str, admin: bool):
        if not self._validate_admin(session_user_id):
            raise PermissionError
        
        try:
            self.get_user_by_login(login)
            raise UserAlreadyExists(f'User {login} already exists.') 
        except UserNotFoundError:
            pass
            
        query = "INSERT INTO users (login, password, admin) VALUES (?, ?, ?)"
        args = (login, password, int(admin))

        return self.insert_data(query, args)
    
    def remove_user(self, session_user_id: int, to_remove_user_id: int):
        if not self._validate_admin(session_user_id):
            raise PermissionError
        
        try:
            self.get_user_by_id(to_remove_user_id)
        except UserNotFoundError as exc:
            raise exc
        
        query = "DELETE FROM users WHERE id = ?"
        args = (to_remove_user_id,)
        self.delete_data(query, args)

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

    def set_admin_value(self, session_user_id: int, new_admin_user_id: int, value : bool):
        if not self._validate_admin(session_user_id):
            raise PermissionError
        
        query = "UPDATE users SET admin = ? WHERE login = ?"
        args = (int(value), new_admin_user_id)
        self.update_data(query, args)