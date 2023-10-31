from flask import Flask, request, jsonify
from domain.ports import *
from flask_expects_json import expects_json
from adapter.flask_schemas import *


class FlaskApp:
    def __init__(self, auth_rep : AuthRepository, user_rep: UserRepository, sale_rep : SaleRepository) -> None:
        self._app = Flask(__name__)
        
        self._auth_rep = auth_rep
        self._user_rep = user_rep
        self._sale_rep = sale_rep
        
        self.__setup_routes()
        
    def __setup_routes(self):
        
        @self._app.route('/login', methods=['POST'])
        @expects_json(LOGIN_SCHEMA)
        def login():
            login_data = request.json
            try:
                result = self._auth_rep.login(
                    login_data.get('login'),
                    login_data.get('password')
                )
                return jsonify({'token' : result})
            except AuthenticationError as exc:
                return jsonify({'message' : exc.args[0]}), 401
            
        @self._app.route('/user/create', methods=['POST'])
        @expects_json(CREATE_USER_SCHEMA)
        def create_user():
            
            payload = request.json
            print(payload)
            new_user_data = payload['new_user']
            try:
                creation = self._user_rep.create_user(
                    self._auth_rep.validate_token(payload.get('token'))['user_id'],
                    new_user_data.get('login'),
                    new_user_data.get('password'),
                    new_user_data.get('admin'),
                )
                return jsonify({'created_user_id': creation})
            except PermissionError:
                return jsonify({'message' : 'User does not have acces to create new users.'}), 401
            
        @self._app.route('/user/remove', methods=['POST'])
        def remove_user():
            # todo
            raise NotImplementedError

        @self._app.route('/proposal/list', methods=['POST'])
        def list_proposals():
            # todo
            raise NotImplementedError
        
        @self._app.route('/proposal/create', methods=['POST'])
        def create_proposal():
            # todo
            raise NotImplementedError
        
        @self._app.route('/proposal/create', methods=['POST'])
        def remove_proposal():
            # todo
            raise NotImplementedError
        
        @self._app.route('/item/search', methods=['GET'])
        def search_item():
            # todo
            raise NotImplementedError
        
        @self._app.route('/item/add', methods=['POST'])
        def add_item():
            # todo
            raise NotImplementedError
        
        @self._app.route('/item/remove', methods=['POST'])
        def remove_item():
            # todo
            raise NotImplementedError
        
        @self._app.route('/sales/list', methods=['GET'])
        def list_sales():
            request
            item_id = request.args.get('item_id')
            name = request.args.get('name')
            
            items = self._sale_rep.search_sale(item_id=item_id, name=name)
            
            return jsonify({'count': len(items), 'items' : items})
        
        @self._app.route('/sales/create', methods=['POST'])
        @expects_json(CREATE_SALE_SCHEMA)
        def create_sale():
            payload = request.json
            
            try:
                self._sale_rep.sell_item(
                    item_id=payload.get('item_id'),
                    sale_price=payload.get('sale_price'),
                    sale_annotation = payload.get('sale_annotation'),
                    sale_user_id = payload.get('sale_user_id'),
                )
                return jsonify({'success': True})
            except (UserNotExists, ItemNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
            
    def run(self):
        self._app.run(host='localhost', port=5050)
        

    
        
        