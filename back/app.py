from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS, cross_origin
from OpenSSL import SSL
from admin import *
from PIL import Image
import requests
import cStringIO
import json
import os
import uuid

context = SSL.Context(SSL.SSLv23_METHOD)

app = Flask(__name__)
cors = CORS(app, resources={r'/api/*': {'origins': '*'}})

app.config['BASE_URL'] = 'https://localhost:5000/'
app.config['DB_FOLDER'] = 'db/'
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['ALLOWED_EXTENSIONS'] = set(['png', 'jpg', 'jpeg', 'gif'])

# Code slightly modified from https://blog.miguelgrinberg.com/post/designing-a-restful-api-with-python-and-flask
# The backend will be independent from the frontend.
# Flask will help us with building a REST API for the front-end.
@app.route('/api/login', methods=['POST'])
def login(): 
    is_admin = False
    for admin in ADMIN_USERS:   
        if request.data == admin:
            is_admin = True

    if is_admin:
        print(ADMIN_RESPONSE)
        return ADMIN_RESPONSE
    else:
        login_request = requests.post('http://inscricoes.ncuritiba2017.com.br/login', data = request.data)
        return login_request._content

@app.route('/api/db/<path:filename>')
def serve_db(filename):
    return send_from_directory(app.config['DB_FOLDER'], filename)

@app.route('/api/uploads/<path:filename>')
def serve_images(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/edit_activity/<int:activity_id>', methods=['POST'])
def edit_activity(activity_id):
    data = json.loads(request.data)
    if data['admin_hash'] == ADMIN_HASH:

        if 'image' in data: 
            image_data = re.sub('^data:image/.+;base64,', '', data['image']).decode('base64')
            image = Image.open(cStringIO.StringIO(image_data))
            image_path = os.path.join(app.config['UPLOAD_FOLDER'], str(activity_id) + '.' + (image.format).lower())    
            image.save(image_path, format=image.format)
            data['image'] = app.config['BASE_URL'] + 'api/' + image_path

        with open('db/activities.json', 'r') as activities:
            db_data = json.load(activities)

        index = 0
        found = False
        for i in db_data:
            if i['id'] == activity_id:
                found = True
                break
            index = index + 1

        if not found:
            db_data.append({})
            data['id'] = index

        for key, value in data.items():
            db_data[index][key] = value

        with open('db/activities.json', 'w') as activities:
            json.dump(db_data, activities)

        return 'Done.'

    else:

        return Response('Bad credentials.', 401)

@app.route('/api/delete_activity/<int:activity_id>', methods=['POST'])
def delete_activity(activity_id):
    data = json.loads(request.data)

    if data['admin_hash'] == ADMIN_HASH:

        with open('db/activities.json', 'r') as activities:
            db_data = json.load(activities)

        index = 0
        found = False
        for i in db_data:
            if i['id'] == activity_id:
                found = True
                break
            index = index + 1

        if found:
            del db_data[index]

        with open('db/activities.json', 'w') as activities:
            json.dump(db_data, activities)

        return 'Deleted Successfully!'

    else:

        return Response('Bad credentials.', 401)


@app.route('/api/edit_faq/<faq_id>', methods=['POST'])
def edit_faq(faq_id):
    data = json.loads(request.data)
    
    if data['admin_hash'] == ADMIN_HASH:
      
        with open('db/faq.json', 'r') as faq:
            db_data = json.load(faq)

        # Find right group FAQ.
        aux1 = 0
        for i in db_data:
            if i['group'] == str(data['group']):
                break
            aux1 = aux1 + 1

        # Find right ID FAQ.
        aux2 = 0
        for i in db_data[aux1]['group_content']:
            if i['item_id'] == faq_id:
                break
            aux2 = aux2 + 1

        if data['mode'] == 'adding':
            db_data[aux1]['group_content'].append({})
            faq_id = uuid.uuid4()

        db_data[aux1]['group_content'][aux2] = ({
                "item_id": str(faq_id),
                "item_title": data['item_title'],
                "item_content": data['item_content']
            })

        # Delete previous question if group changed.
        if data['group'] != data['previousGroup'] and data['previousGroup'] != 0:

            # Find right group FAQ.
            aux1 = 0
            for i in db_data:
                if i['group'] == str(data['previousGroup']):
                    break
                aux1 = aux1 + 1

            # Find right ID FAQ.
            aux2 = 0
            found = False
            for i in db_data[aux1]['group_content']:
                if i['item_id'] == str(data['id']):
                    found = True
                    break
                aux2 = aux2 + 1

            del db_data[aux1]['group_content'][aux2]

        # Save to JSON.
        with open('db/faq.json', 'w') as faq:
            json.dump(db_data, faq)

        return 'Done.'

    else:

        return Response('Bad credentials.', 401)


@app.route('/api/delete_faq/<faq_id>', methods=['POST'])
def delete_faq(faq_id):
    data = json.loads(request.data)

    if data['admin_hash'] == ADMIN_HASH:

        with open('db/faq.json', 'r') as faq:
            db_data = json.load(faq)

        # Find right group FAQ.
        aux1 = 0
        for i in db_data:
            if i['group'] == str(data['group']):
                break
            aux1 = aux1 + 1

        # Find right ID FAQ.
        aux2 = 0
        found = False
        for i in db_data[aux1]['group_content']:
            if i['item_id'] == str(data['id']):
                found = True
                break
            aux2 = aux2 + 1

        if found:
            del db_data[aux1]['group_content'][aux2]

        # Save to JSON.
        with open('db/faq.json', 'w') as faq:
            json.dump(db_data, faq)

        return 'Successfully deleted.'

    else:

        return Response('Bad credentials.', 401)

if __name__ == '__main__':
    context = ('ssl.crt', 'ssl.key')
    app.run(host='0.0.0.0', port=5000, ssl_context=context, threaded=True, debug=True)