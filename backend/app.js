const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authRoute = require('./routes/authRoutes');
const cors = require('cors');
require('dotenv').config(); 
const emailRoute = require('./routes/emailRoutes')
const serverless = require('serverless-http');

const app = express();
const PORT = process.env.PORT || 5100;
const router = express.Router();

// connectDB
connectDB();

// middleware
const corsOptions = {
    origin:  process.env.ALLOWED_ORIGIN ||  'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    creadentials: true
}
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use('/api/auth', authRoute);
app.use('/api/', emailRoute);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});

app.use('/.netlify/functions', router);

module.exports.handler = serverless(app);