from adapter.flask_app import FlaskApp
from adapter.auth_repository_jwt import AuthRepositoryJwt
from adapter.user_repository_sqlite import UserRepositorySQLite
from adapter.sale_repository_sqlite import SaleRepositorySQLite

DB_PATH = 'infrastructure/database.db'

user_rep = UserRepositorySQLite(database_path=DB_PATH)
auth_rep = AuthRepositoryJwt(user_rep=user_rep)
sale_rep = SaleRepositorySQLite(database_path=DB_PATH)

app = FlaskApp(
    auth_rep=auth_rep,
    user_rep=user_rep,
    sale_rep=sale_rep
    )

app.run()