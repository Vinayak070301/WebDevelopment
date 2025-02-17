const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;
const session = require('express-session');
const mongoose=require('mongoose')
const MongoStore = require('connect-mongo');
require('dotenv').config()
app.use(session({
    secret: 'hbjhsdbjhbdjshbcsjdhb',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:'mongodb://127.0.0.1:27017/auth_passport'})
}))

const passport = require('./authentication/passport');
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/user'));


app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));
  
app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/profile');
    });



mongoose.connect('mongodb://127.0.0.1:27017/auth_passport')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })
