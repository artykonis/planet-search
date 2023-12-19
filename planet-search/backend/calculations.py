import os
from geoapify_apis import *
from skyfield.api import load, N, W, wgs84

def calculate_planet_altitude(address, planet):
    api_key = os.getenv("GEOAPIFY_API_KEY")

    # get latitude and longitude
    geocode_data = call_geocoding_api(api_key, address)
    latitude, longitude = geocode_data["lat"], geocode_data["lon"]

    # get current time
    ts = load.timescale()
    t = ts.now()

    planets = load('de421.bsp') # Load planetary data
    selected_location = planets["earth"] + wgs84.latlon(latitude * N, longitude * W)

    planet_dict = {
        "mercury": "mercury",
        "venus": "venus",
        "mars": "mars",
        "jupiter": "jupiter barycenter",
        "saturn": "saturn barycenter",
        "uranus": "uranus barycenter",
        "neptune": "neptune barycenter",
        "pluto": "pluto barycenter"
    }
    astrometric = selected_location.at(t).observe(planets[planet_dict[planet.lower()]])
    alt, az, d = astrometric.apparent().altaz()
    return alt