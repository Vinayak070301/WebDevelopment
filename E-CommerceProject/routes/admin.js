const path = require('path');
const express = require('express');
const router = express.Router();

const adminController = require('../controller/admin');

router.get('/home',adminController.getAdminHome);
router.get('/products/all',adminController.getProductsAll);
router.get('/products/add',adminController.getProductsAdd);
router.get('/products/update/:id',adminController.getProductsUpdate);
router.get('/products/delete/:id',adminController.getProductsDelete);

router.post('/products/add',adminController.postProductsAdd);
router.post('/products/update',adminController.postProductsUpdate);
module.exports=router         
  