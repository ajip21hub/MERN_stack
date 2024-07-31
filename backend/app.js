const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config(); 
const emailRoute = require('./routes/emailRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

// connectDB
connectDB();

// middleware
const corsOptions = {
    origin:  process.env.ALLOWED_ORIGIN ||  'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    creadentials: true
}
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use('/api/auth', authRoute);
app.use('/api/', emailRoute);

app.listen(PORT, ()=>{
    console.log('Server running on port ${PORT}');
});