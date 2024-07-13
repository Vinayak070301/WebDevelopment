const path = require('path');
const express = require('express');
const router = express.Router();
const passport = require('passport');

const usercontroller = require('../controller/user');

router.get('/', usercontroller.GetHome);
router.get('/signup',usercontroller.GetSignup);
router.get('/login',usercontroller.GetLogin);
router.get('/profile',usercontroller.GetProfile);
router.post('/signup',usercontroller.PostSignup);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/profile');
    });

router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err)return next(err);
    res.redirect('/login');
  });
})


module.exports = router;