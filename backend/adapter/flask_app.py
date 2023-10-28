from flask import Flask, request, jsonify
from domain.ports import *

class FlaskApp:
    def __init__(self, auth_rep : AuthRepository) -> None:
        self._app = Flask(__name__)
        
        self._auth_rep = auth_rep
        
        self.__setup_routes()
        
    def __setup_routes(self):
        
        @self._app.route('/login', methods=['POST'])
        def login():
            login_data = request.json
            try:
                result = self._auth_rep.login(
                    login_data.get('login'),
                    login_data.get('password')
                )
                return jsonify({'token' : result})
            except AuthenticationError as e:
                return jsonify({'message' : e.args[0]}), 401
            
        
    def run(self):
        self._app.run(host='localhost', port=5050)
        

    
        
        