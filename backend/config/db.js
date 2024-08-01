const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
    try {
      console.log(`Mongo URI: ${process.env.DB_URI}`); 
     const conn =  await mongoose.connect(process.env.DB_URI);
      console.log('MongoDB connected');
      console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
  };

  // console.log(connectDB);
  
  module.exports = connectDB;