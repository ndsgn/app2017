from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from OpenSSL import SSL
import requests

context = SSL.Context(SSL.SSLv23_METHOD)
context.use_privatekey_file('ssl.key')
context.use_certificate_file('ssl.crt')

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

# Code slightly modified from https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
# The backend will be independent from the frontend.
# Flask will help us with building a REST API for the front-end.
@app.route('/api/login', methods=['POST'])
def login():    
    login_request = requests.post('http://inscricoes.ncuritiba2017.com.br/login', data = request.data)
    return login_request._content

if __name__ == '__main__':
    context = ('ssl.crt', 'ssl.key')
    app.run(host='0.0.0.0', port=5000, ssl_context=context, threaded=True, debug=True)