const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

const app = express();

// homepage route
app.get('/', (req, res) => {
    res.send('Hello, world');
})

// start server
const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log('Server is online');
})