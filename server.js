/**
 * server.js is the starting point
 */
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const mongoose = require('mongoose');
const User = require('./models/user');

// Require auth packages
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const passportLocalMongoose = require('passport-local-mongoose');

// Cryptocurrency-helper packages
const bjs = require('bitcoinjs-lib');
const bip32 = require('bip32');
const Web3 = require('web3');

// Include routes
const indexRoutes = require('./routes/index');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');

// Variables
const xpub = 'xpub6Ci3DHRbomXva9UT2ZFDWwxeUVqw8vox45ofZCDMk5tpA8cQeiExu8BVPYhYbx6chuquywSgXofiSTbLjL9YzvVUC7VEkayTw5igbCCnmky';
const CONNECTION_STRING = '' // Connection string removed for privacy

// Connect to MongoAtlas database
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true });

// App settings
// app.set('view engine', 'ejs');
app.use(express.static(__dirname))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'blockspace',
  resave: false,
  saveUninitialized: false
}));

// Auth settings
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.use(new GoogleStrategy({
  callbackURL: '',
  clientID: '',
  clientSecret: ''
}, () => {

}
))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route settings
app.use(authRoutes);
app.use(dashboardRoutes);
app.use(indexRoutes);

app.listen(process.env.PORT || 9000, function () {
  console.log('Server started ON PORT 9000');
})