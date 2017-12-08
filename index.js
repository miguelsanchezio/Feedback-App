const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/user');
require('./services/passport');

// connect to mongoDB using mongoose
// mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// passport config
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// homepage route
app.get('/', (req, res) => {
    res.send('Hello, world');
})

// routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is online');
})