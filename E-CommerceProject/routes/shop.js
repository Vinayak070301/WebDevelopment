const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controller/shop');

router.get('/home',shopController.getHome);
router.get('/products/:id',shopController.getproductsid);
router.get('/cart/add/:id',shopController.getAddtoCart);
router.get('/cart',shopController.getcart);
router.get('/cart/increase/:id',shopController.getincrease);
router.get('/cart/decrease/:id',shopController.getdecrease);
router.get('/buynow',shopController.getbuynow);





module.exports=router   