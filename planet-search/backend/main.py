from flask import Flask, request, jsonify
from dotenv import load_dotenv
from calculations import *

load_dotenv()

app = Flask(__name__)

@app.route("/compute_result", methods=["POST"])
def compute_result():
    data = request.get_json()
    address = data['address']
    planet = data['planet']

    visibility = calculate_planet_altitude(address, planet)
    altitude_in_degrees = visibility.degrees

    result = {
        'isVisible': True if altitude_in_degrees > 10 else False,
        'altitude': altitude_in_degrees
    }

    return jsonify(result), 200

if __name__ == "__main__":
    app.run(debug=True)
