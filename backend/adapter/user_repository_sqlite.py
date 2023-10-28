from domain.ports.user_repository import UserRepository, UserNotFoundError
from domain.entities.user import User
import sqlite3


class UserRepositorySQLite(UserRepository):
    def __init__(self, database_path):
        self.db_path = database_path

    def create_user(self, session_user_id: int, login: str, password: str, admin: bool):
        user = self.get_user_by_id(session_user_id)
        if not user.admin:
            raise PermissionError
        
        # TODO: check if same login already exists
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO users (login, password, admin) VALUES (?, ?, ?)", (login, password, int(admin)))
            conn.commit()
            return cursor.lastrowid

    def get_user_by_id(self, user_id: int):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, login, password, admin FROM users WHERE id = ?", (str(user_id)))
            row = cursor.fetchone()
        if row:
            return User(*row)
        raise UserNotFoundError

    def get_user_by_login(self, login: str):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT id, login, password, admin FROM users WHERE login = ?", (login, ))
            row = cursor.fetchone()
        if row:
            return User(*row)
        raise UserNotFoundError


    def set_admin_value(self, login:str, admin:bool): 
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("UPDATE users SET admin = ? WHERE login = ?", (int(admin), login))
            conn.commit()