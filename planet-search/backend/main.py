from flask import Flask, request, jsonify
from dotenv import load_dotenv
from calculations import *

load_dotenv()

app = Flask(__name__)

@app.route("/")
def home():
    return 'Ready!', 200

@app.route("/compute_result", methods=["POST"])
def compute_result():
    VALID_PLANETS = ['mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune']
    data = request.get_json()
    try: 
        address = data['address']
        planet = data['planet']
    except KeyError:
        return jsonify({'error': '"Address" or "Planet" missing from request body'}), 400

    if planet.lower() not in VALID_PLANETS:
        return jsonify({'error': 'Planet not recognised'}), 422

    visibility = calculate_planet_altitude(address, planet)
    altitude_in_degrees = visibility.degrees

    result = {
        'isVisible': True if altitude_in_degrees > 10 else False,
        'altitude': altitude_in_degrees
    }

    return jsonify(result), 200

if __name__ == "__main__":
    app.run(debug=True)
