const Users = require('../models/users');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.GetHome=(req,res,next)=>{
    res.render('home');
}
module.exports.GetLogin=(req,res,next)=>{
    res.render('login');
}
module.exports.GetSignup=(req,res,next)=>{
    res.render('signup');
}
module.exports.GetProfile=(req,res,next)=>{
    if (req.isAuthenticated()) {
        // req.user gives us the user in passportJS
        res.render('profile', { user: req.user });
    } else {
        res.redirect('/login');
    }
}

module.exports.PostSignup=async(req,res,next)=>{
    const {username,password}=req.body;
    try{
        let user=await Users.findOne({username});
        if(user){
            return res.render('signup',{msg:"username already taken,choose another name"});
        }
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            try {
                user = await Users.create({
                    username,
                    password: hash
                });

                res.redirect('/login');
            } catch (err) {
                return res.status("500").json("Cannot create a user right now!");
            }
        });

    } catch (err) {
        next(err);
    }
}

    


