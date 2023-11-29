from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np

conductores_dataset = pd.read_csv('conductores.csv')
usuarios_dataset = pd.read_csv('usuarios.csv')

json = conductores_dataset.to_json(orient='records')

respuesta = [
    {
        'name' : 'Mateo Garcia',
        'car' : 'Chevrolet',
        'plate' : 'ABC-482',
        'zone' : 'norte',
        'trust' : '98%'
    },
    {
        'name' : 'Valentina Lopez',
        'car' : 'renaul',
        'plate' : 'DEF-719',
        'zone' : 'norte',
        'trust' : '88%'
    },
    {
        'name' : 'Santiago Rodriguez',
        'car' : 'ford',
        'plate' : 'GHI-563',
        'zone' : 'norte',
        'trust' : '65%'
    },
    {
        'name' : 'Isabela Gomez',
        'car' : 'toyota',
        'plate' : 'JKL-126',
        'zone' : 'norte',
        'trust' : '47%'
    },
    {
        'name' : 'Juan Camilo Herrera',
        'car' : 'nissan',
        'plate' : 'MNO-894',
        'zone' : 'norte',
        'trust' : '22%'
    },
]

app =  Flask(__name__)
CORS(app)

# GET method
@app.route('/', methods=["GET"])
def index():
    return jsonify(json)

# POST method
@app.route('/post', methods=['POST'])
def create_data():
    data = request.get_json()
    if not data:
        return (jsonify({'error' : 'No data provided'}), 400)
    return (jsonify(respuesta), 201)

if __name__ == "__main__":
    app.run(debug=True, port=5173)