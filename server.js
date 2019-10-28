/**
 * server.js is the starting point
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
const User = require('./models/user');

// Require auth packages
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const passportLocalMongoose = require('passport-local-mongoose');

// Include routes
const indexRoutes = require('./routes/index');
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');

// Variables
const CONNECTION_STRING = 'mongodb+srv://VictorHogrefe:Manowar2@cluster0-dbqcz.mongodb.net/user-registration-db?retryWrites=true&w=majority' // Connection string removed for privacy

// Connect to MongoAtlas database
mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true });

// App settings
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


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route settings
app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', indexRoutes);

app.listen(process.env.PORT || 9000, function () {
  console.log('Server started ON PORT 9000');
})