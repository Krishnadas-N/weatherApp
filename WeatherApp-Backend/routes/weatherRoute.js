const express = require('express');
const weatherRouter = express.Router();
require('dotenv').config();
const axios = require('axios');
require('dotenv').config();
 
weatherRouter.get('/weather',async (req,res,next)=>{
    try{
        const {data} =await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${process.env.weatherApi}`);
        console.log(data);
        res.send(data)
    }catch(err){
        next(err)
    }
})

module.exports = weatherRouter