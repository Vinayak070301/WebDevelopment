let mongoose = require('mongoose');
const { TokenError } = require('passport-oauth2');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
   // password: String,   //aisay bhi hota hai
   password:{
    type: String
    },
    googleId: String,
    googleAccessToken: String,
    googleImg: String
   
})

module.exports = mongoose.model('Users', userSchema);