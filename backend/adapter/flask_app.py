from flask import Flask, request, jsonify
from domain.ports import *
from flask_expects_json import expects_json
from adapter.flask_schemas import *
from flask_cors import CORS


class FlaskApp:
    def __init__(self, auth_rep : AuthRepository, user_rep: UserRepository, sale_rep : SaleRepository, item_rep : ItemRepository, proposal_rep : ProposalRepository, expense_rep : ExpenseRepository) -> None:
        self._app = Flask(__name__)
        CORS(self._app)
        
        self._auth_rep = auth_rep
        self._user_rep = user_rep
        self._sale_rep = sale_rep
        self._item_rep = item_rep
        self._proposal_rep = proposal_rep
        self._expense_rep = expense_rep
        
        self.__setup_routes()
        
    def __validate_token(self, token):
        try:
            if token is None:
                raise AuthenticationError('token is null')
            return self._auth_rep.validate_token(token)
        except AuthenticationError as exc:
            return jsonify({'message' : exc.args[0]}), 401
        
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
                user = self._user_rep.get_user_by_login(login_data.get('login'))
                return jsonify({'token' : result, 'user' : user})
            except AuthenticationError as exc:
                return jsonify({'message' : exc.args[0]}), 401
            
        @self._app.route('/user/create', methods=['POST'])
        @expects_json(CREATE_USER_SCHEMA)
        def create_user():
            payload = request.json
            token = request.headers.get('Session-Token')
            new_user_data = payload['new_user']
            print(request.headers)

            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                creation = self._user_rep.create_user(
                    validated_token.get('user_id'),
                    new_user_data.get('login'),
                    new_user_data.get('password'),
                    new_user_data.get('admin'),
                )
                return jsonify({'created_user_id': creation})
            except PermissionError:
                return jsonify({'message' : 'User does not have access to create new users.'}), 401
            except UserAlreadyExists:
                return jsonify({'message': 'User already exists.'}), 403
                
        @self._app.route('/user/remove', methods=['POST'])
        @expects_json(REMOVE_USER_SCHEMA)
        def remove_user():
            payload = request.json
            to_remove_user_id = payload.get('user_id')
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            try:
                session_user_id = validated_token.get('user_id')
                self._user_rep.remove_user(session_user_id=session_user_id, 
                                           to_remove_user_id=to_remove_user_id)
                return jsonify({"success": True})
            except PermissionError:
                return jsonify({'message' : 'User does not have acces to create new users.'}), 401

        @self._app.route('/proposal/search', methods=['GET'])
        def search_proposal():
            item_id = request.args.get('item_id')
            name = request.args.get('name')
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            proposals = self._proposal_rep.search_proposal(item_id=item_id, name=name)
            
            return jsonify({'count': len(proposals), 'items' : proposals})

        @self._app.route('/proposal/create', methods=['POST'])
        @expects_json(CREATE_PROPOSAL_SCHEMA)
        def create_proposal():
            payload = request.json
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                self._proposal_rep.create_proposal(
                    payload.get('name'),
                    payload.get('icon'),
                    payload.get('year'),
                    payload.get('color'),
                    payload.get('manufacturer'),
                    validated_token.get('user_id'),
                    payload.get('annotation'),
                    payload.get('purchase_price'),
                    payload.get('sale_price'),
                    payload.get('sale_user_id'),
                )
                return jsonify({'success': True})
            except (UserNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
        
        @self._app.route('/proposal/deny', methods=['POST'])
        def deny_proposal():
            payload = request.json
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                self._proposal_rep.deny_proposal(item_id=payload.get('item_id'))
                return jsonify({'success': True})
            except (ItemNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
            
        @self._app.route('/proposal/approve', methods=['POST'])
        def approve_proposal():
            payload = request.json
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                self._proposal_rep.approve_proposal(item_id=payload.get('item_id'))
                return jsonify({'success': True})
            except (ProposalNotFound) as exc:
                return jsonify({'error' : exc.args[0]}), 404
            
        @self._app.route('/proposal/update', methods=['POST'])
        def update_proposal():
            payload = request.json
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                self._proposal_rep.update_proposal(
                    item_id=payload.get('item_id'),
                    name=payload.get('name'),
                    icon=payload.get('icon'),
                    year=payload.get('year'),
                    color=payload.get('color'),
                    manufacturer=payload.get('manufacturer'),
                    proposed_date=payload.get('proposed_date'),
                    proposal_user_id=payload.get('proposal_user_id'),
                    annotation=payload.get('annotation'),
                    purchase_price=payload.get('purchase_price'),
                    sale_price=payload.get('sale_price'),
                    sale_user_id=payload.get('sale_user_id'),
                )
                return jsonify({'success': True})
            except (ItemNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
        
        @self._app.route('/item/search', methods=['GET'])
        def search_item():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            item_id = request.args.get('item_id')
            name = request.args.get('name')
            
            items = self._item_rep.search_item(item_id=item_id, name=name)
            
            return jsonify({'count': len(items), 'items' : items})
        
        @self._app.route('/item/remove', methods=['POST'])
        def remove_item():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            payload = request.json
            try:
                self._item_rep.remove_item(item_id=payload.get('item_id'))
                return jsonify({'success': True})
            except (ItemNotFound) as exc:
                return jsonify({'error' : exc.args[0]}), 404
            
        @self._app.route('/item/update', methods=['POST'])
        def update_item():
            payload = request.json
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            try:
                self._item_rep.update_item(
                    item_id=payload.get('item_id'),
                    name=payload.get('name'),
                    icon=payload.get('icon'),
                    year=payload.get('year'),
                    color=payload.get('color'),
                    manufacturer=payload.get('manufacturer'),
                    proposed_date=payload.get('proposed_date'),
                    proposal_user_id=payload.get('proposal_user_id'),
                    annotation=payload.get('annotation'),
                    purchase_price=payload.get('purchase_price'),
                    sale_price=payload.get('sale_price'),
                    sold=payload.get('sold'),
                    sale_date=payload.get('sale_date'),
                    sale_annotation=payload.get('sale_annotation'),
                    sale_user_id=payload.get('sale_user_id'),
                )
                return jsonify({'success': True})
            except (ItemNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
        
        @self._app.route('/sales/list', methods=['GET'])
        def list_sales():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            item_id = request.args.get('item_id')
            name = request.args.get('name')
            
            items = self._sale_rep.search_sale(item_id=item_id, name=name)
            
            return jsonify({'count': len(items), 'items' : items})
        
        @self._app.route('/sales/create', methods=['POST'])
        @expects_json(CREATE_SALE_SCHEMA)
        def create_sale():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
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
            
        @self._app.route('/expense/search', methods=['GET'])
        def search_expense():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            item_id = request.args.get('item_id')
            name = request.args.get('name')
            
            items = self._expense_rep.search_item(item_id=item_id, name=name)
            
            return jsonify({'count': len(items), 'items' : items})
        
        @self._app.route('/expense/create', methods=['POST'])
        @expects_json(CREATE_EXPENSE_SCHEMA)
        def create_expense():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            payload = request.json
            
            try:
                self._expense_rep.create_expense(
                    expense_register_date=payload.get('expense_register_date'),
                    expense_annotation=payload.get('expense_annotation'),
                    item_id=payload.get('item_id'),
                    expense_price=payload.get('expense_price'),
                    expense_register_user_id=payload.get('expense_register_user_id'),
                )
                return jsonify({'success': True})
            except (UserNotExists, ItemNotExists) as exc:
                return jsonify({'error' : exc.args[0]}), 404
            
        @self._app.route('/sales/suggestion', methods=['GET'])
        def get_sell_price_suggestion():
            token = request.headers.get('Session-Token')
            validated_token = self.__validate_token(token)
            if isinstance(validated_token, tuple):
                return validated_token
            
            item_id = request.args.get('item_id')
            
            price = self._sale_rep.get_sell_price_suggestion(item_id=item_id)
            
            return jsonify({'suggested_price': price})
            
    def run(self):
        self._app.run(host='localhost', port=5050)
        

    
        
        