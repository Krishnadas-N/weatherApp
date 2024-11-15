Here’s a comprehensive README.md file template for your project that includes both frontend and backend details:

markdown
Copy code
# WeatherApp

## Overview

**WeatherApp** is a full-stack application that provides real-time weather data using the OpenWeather API. The app consists of a **frontend** built with Angular and a **backend** powered by Node.js and Express. The backend serves weather data, while the frontend fetches and displays this data dynamically. It also handles offline storage when the user is not connected to the internet.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Weather Data Display**: Shows real-time weather data including temperature, humidity, wind speed, and rainfall.
- **Offline Storage**: Saves the last fetched weather data to local storage when offline.
- **Responsive UI**: Designed for both desktop and mobile devices using TailwindCSS and Angular Material.
- **Backend API**: Fetches weather data from the OpenWeather API and serves it through a Node.js backend.
- **Real-Time Updates**: When the user is online, weather data is fetched dynamically from the backend.

---

## Tech Stack

### Frontend
- **Angular**: The main framework used to build the frontend of the app.
- **HttpClientModule**: For making HTTP requests to the backend.
- **LocalStorage**: For offline data storage.

### Backend
- **Node.js**: The runtime environment for the backend.
- **Express.js**: Web framework for handling routes and API requests.
- **Axios**: For making requests to the OpenWeather API.
- **MongoDB**: Database for storing weather data and user preferences (optional).
- **CORS**: For enabling cross-origin resource sharing between frontend and backend.

---

## Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd WeatherApp-Frontend
Install dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
ng serve
Open your browser and navigate to http://localhost:4200 to see the app in action.

Backend Setup
Clone the repository:

bash
Copy code
git clone <repository-url>
cd WeatherApp-Backend
Install dependencies:

bash
Copy code
npm install
Create a .env file for environment variables:

plaintext
Copy code
MONGODB_URI=mongodb://localhost:27017/weatherapp
WEATHER_API_KEY=your-openweather-api-key-here
Start the backend server:

bash
Copy code
node server.js
The backend will now be running on http://localhost:3000.

Environment Variables
MONGODB_URI: MongoDB connection string (for local MongoDB or cloud MongoDB).
WEATHER_API_KEY: Your OpenWeather API key for fetching weather data.
Running the Application
Frontend:

Ensure the frontend is running by executing ng serve in the frontend project directory.
Visit http://localhost:4200 in your browser.
Backend:

Start the backend by running node server.js (or npm start if configured) in the backend project directory.
The backend will run at http://localhost:3000.
Full Stack: When both frontend and backend are running, the frontend will fetch weather data from the backend.

API Endpoints
GET /weather
Fetches weather data from the OpenWeather API.

Response:
json
Copy code
{
  "success": true,
  "weatherData": { ...weather data from OpenWeather API... },
  "message": "Weather Data Fetched Successfully"
}
Example Response:
json
Copy code
{
  "success": true,
  "weatherData": {
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 801,
        "main": "Clouds",
        "description": "few clouds",
        "icon": "02d"
      }
    ],
    "main": {
      "temp": 300.15,
      "feels_like": 298.94,
      "temp_min": 299.1,
      "temp_max": 301.29,
      "pressure": 1011,
      "humidity": 50
    },
    "wind": {
      "speed": 5.14,
      "deg": 230,
      "gust": 7.28
    },
    "rain": {
      "1h": 0.15
    },
    "clouds": {
      "all": 20
    },
    "dt": 1618323180,
    "sys": {
      "type": 1,
      "id": 6779,
      "country": "IT",
      "sunrise": 1618302399,
      "sunset": 1618354327
    },
    "timezone": 3600,
    "id": 3169070,
    "name": "Modena",
    "cod": 200
  },
  "message": "Weather Data Fetched Successfully"
}
Contributing
Fork the repository.
Clone your forked repository.
Create a new branch (git checkout -b feature-name).
Make changes and commit (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.