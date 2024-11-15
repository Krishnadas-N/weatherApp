const mongoose = require('mongoose');
require('dotenv').config();
 
module.exports.connectDb =()=>{
    const mongoUri = process.env.MONGODBURI
    mongoose.connect(mongoUri)
    .then(()=>{
        console.log("Mongo Db Connected Succefully")
    })
    .catch((err)=>{
        console.log("Some Error Caused",err)
    })
}