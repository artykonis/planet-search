
# Planet Search

### The Vision
This application is a passion project that allows me to develop something on a topic I love... Space.

The application operates on a basic premise: you input your (or any) address, select a planet, and see whether the planet is currently visible from your location. 

The current visibility is determined by assessing the planet's relative latitude, considering values above 10 degrees as indicative of visibility. However, this method has clear limitations, as it overlooks factors such as the surrounding environment, weather conditions, and the distance to the celestial body.

In time, I plan to integrate all these factors into the calculation process. I'm also aiming to add new features like custom dates, the best methods of observation, and ideal observation times. I see this project's premise as providing endless opportunities for updating, innovating, and testing my ingenuity and design ideals.. 

Happy PlanetSearching!

## Running the application

### Backend
In the backend directory, set up a virtual environment:
```bash 
python -m venv venv
```
 Activate the virtual environment
```bash 
# Windows
venv\Scripts\activate

# Mac
source venv/bin/activate
```
Install the dependencies 
```bash
pip install -r requirements.txt
```
Run the application 
```bash
flask --app main run
```
The application will now run on [http://localhost:5000](http://localhost:5000)

#### Note
The application requires an API key to function properly. This can be set as a parameter in an .env file. Please get in contact at artykonis@gmail.com if running the application and I will provide the key.
### Frontend

Install the dependencies 
```bash
npm install
```
Run the application 
```bash
npm run
```
The application will run in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Note
The package.json file includes a property which allows the frontend to connect to the backend
```json
"proxy": "http://localhost:5000"
```
Any changes you decide to make to the server URL should be reflected here.
