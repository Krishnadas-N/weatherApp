const express = require('express');
const weatherRouter = express.Router();
const axios = require('axios');
require('dotenv').config();

weatherRouter.get('/weather', async (req, res, next) => {
  try {
    const { lat = 44.34, lon = 10.99 } = req.query;

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: process.env.WEATHER_API_KEY, 
      },
    });

    if (!data) {
      throw new Error("Weather data not available for the requested location.");
    }

    res.status(200).json({
      success: true,
      weatherData: data,
      message: "Weather data fetched successfully.",
    });
  } catch (err) {
    next(err);
  }
});

module.exports = weatherRouter;
