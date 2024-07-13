const passport = require('passport');
const LocalStrategy = require('passport-local');
const Users = require('../models/users');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy(
    async function(username, password, done) {
    try{
        const user = await Users.findOne({ username: username });
        if (!user) { 
                return done(null, false); 
            }
        bcrypt.compare(password, user.password, function (err, result) {
            if (!result) 
                return done(null, false);

            return done(null, user);
        });
    }
    catch(err){
        return done(err);
    }
}
  ));
  // PASSPORT SETUP





var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:"475140332943-7iq1ake3gijblvs5u2cj85bc4ultfhj2.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:4444/auth/google/callback",
    passReqToCallback   : true
  },
  async function (request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
    try {
        const user = await Users.findOne({ googleId: profile.id });
        if (user) {
            return done(null, user);
        }
        const newUser = await Users.create({
            googleId: profile.id,
            username: profile.displayName,
            googleAccessToken: accessToken,
            googleImg: profile.picture
        });
        return done(null, newUser);
    } catch (err) {
        done(err);
    }
  }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        let user = await Users.findOne({ _id: id });
        done(null, user);
    } catch (err) {
        done(err);
    }
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // });
});

module.exports = passport;