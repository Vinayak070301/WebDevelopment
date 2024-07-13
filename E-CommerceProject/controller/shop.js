const Products=require('../models/products');
const users= require('../models/user');

module.exports.getHome=async(req,res,next)=>{
    const products = await Products.find();
  //  console.log(products);
    const {getbycategory}=require('../utils/libary');
    let data =getbycategory(products);
    // res.send(data);
    res.render('shop/home',{
        products:data,
    })
}
module.exports.getproductsid=async(req,res,next)=>{
  let {id}=req.params;
  const product = await Products.findById(id);
  res.render('shop/shop_product_detail',{
    product
  })
}
module.exports.getAddtoCart=async(req,res,next)=>{
  try {
    const { id } = req.params;
    let cart = req.user.cart;
    let indx = -1;
    cart.forEach((item, i) => {
        if (item.id == id) {
            indx = i;
        }
    })
    if (indx == -1) {
        cart.unshift({
            id: id,
            quantity: 1
        })
    }
    else {
        cart[indx].quantity++;
    }

    // To make sure that db mei changes ho jaaye we need to save it
    req.user.save();
    res.redirect('/shop/cart');
} catch (err) {
    next(err);
}
}
module.exports.getcart=async(req,res,next)=>{
  try{
    const { id } = req.params;
        let user = await users.findOne({ _id: req.user._id }).populate('cart.id');

        console.log(user.cart);
        let totalPrice = 0;
        user.cart.forEach((item) => {
            totalPrice += item.id.price * item.quantity;
        })
        res.render('shop/cart', {
            cart: user.cart,
            totalPrice
        });
  }
  catch(err){
    next(err)
  }
}
module.exports.getincrease=async(req,res,next)=>{
  try {
    const { id } = req.params;
    let cart = req.user.cart;
    let indx = -1;
    cart.forEach((item, i) => {
        if (item.id == id) {
            indx = i;
        }
    })
        cart[indx].quantity++;
    req.user.save();
    res.redirect('/shop/cart');
} catch (err) {
    next(err);
}
}
module.exports.getdecrease=async(req,res,next)=>{
  try {
    const { id } = req.params;
    let cart = req.user.cart;
    let indx = -1;
    cart.forEach((item, i) => {
        if (item.id == id) {
            indx = i;
        }
    })
    if(cart[indx].quantity>1){
        cart[indx].quantity--;}else{
          cart.splice(indx,1)
        }
    req.user.save();
    res.redirect('/shop/cart');
} catch (err) {
    next(err);
}
}
module.exports.getbuynow=async(req,res,next)=>{
  try{
  let user = await users.findOne({ _id: req.user._id }).populate('cart.id');
  let cart = user.cart;

  let myOrder = req.user.orders;
  console.log(myOrder);
  
  console.log("Before",myOrder);
  let newOrder = cart.map(item => {    
      let order = {};
      order.product = item.id;
      order.quantity = item.quantity;
      order.price = order.product.price * order.quantity;
      return order;
  })
  console.log("NEW ORDER",newOrder);
  myOrder.push(newOrder);
  // console.log(myOrder[0]);
  // await Users.updateOne({
  //     _id: req.user._id
  // }, {
  //     orders: newOrder,
  //     cart: []
  // })
  // console.log(req.user.orders);
  res.send({
      message: "Order placed successfully",
      myOrder
  })
}
  catch(err){
    next(err)
  }
}
