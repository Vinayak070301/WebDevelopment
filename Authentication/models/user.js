let mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },

   // password: String,   //aisay bhi hota hai
   password:{
    type: String,
    required: true
},
   
})

module.exports = mongoose.model('users', userSchema);