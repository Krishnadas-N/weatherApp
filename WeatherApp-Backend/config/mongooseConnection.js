const mongoose = require('mongoose');
require('dotenv').config();
 
const connectDb = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw error;
    }
  };
  
  module.exports = { connectDb }