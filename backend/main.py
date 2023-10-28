from adapter.flask_app import FlaskApp
from adapter.auth_repository_jwt import AuthRepositoryJwt
from adapter.user_repository_sqlite import UserRepositorySQLite

DB_PATH = 'infrastructure/database.db'

user_rep = UserRepositorySQLite(database_path=DB_PATH)
auth_rep = AuthRepositoryJwt(user_rep=user_rep)
app = FlaskApp(auth_rep=auth_rep)

app.run()