const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

const mongoose = require('mongoose');
const hbs = require('hbs');
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: 'asbdbakhhk bwbdwbdbwqkhvedwqvedvqwvdwq dvqwjhwqvejqwvejwqvje',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://vinayak:<password>@cluster0.llhjcza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' })
}))

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/user'));

mongoose.connect('mongodb+srv://vinayak:<password>@cluster0.llhjcza.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhogitst:` + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })