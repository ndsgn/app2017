from flask import Flask, jsonify

app = Flask(__name__)

tests = [
    {
        'id': 1,
        'title': u'Test 1'
    },
    {
        'id': 2,
        'title': u'Test 2'
    }
]

# Code slightly modified from https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
# The backend will be independent from the frontend.
# Flask will help us with building a REST API for the front-end.
@app.route('/api/example/', methods=['GET'])
def index():
	return jsonify({'tests': tests})

if __name__ == '__main__':
	app.run(debug=True)