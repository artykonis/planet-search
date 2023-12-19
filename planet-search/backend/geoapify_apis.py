import requests

def call_geocoding_api(api_key, address):  
    try:
        url = f"https://api.geoapify.com/v1/geocode/search?text={address}&limit=1&apiKey={api_key}"
        response = requests.get(url)
        api_data = response.json()

        geocode_properties = api_data["features"][0]["properties"]
        return geocode_properties
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None
