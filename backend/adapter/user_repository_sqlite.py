from domain.ports.user_repository import UserRepository, UserNotFoundError
from domain.entities.user import User
import sqlite3


class UserRepositorySQLite(UserRepository):
    def __init__(self, database_path):
        self.db_path = database_path

    def create_user(self, login: str, password: str):
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("INSERT INTO users (login, password, admin) VALUES (?, ?, 0)", (login, password))
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

