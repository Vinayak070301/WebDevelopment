const Products=require('../models/products');

module.exports.getAdminHome=(req,res,next)=>{
    res.render('admin/home',{
        isAdmin:true
       });
}

module.exports.getProductsAll= async(req,res,next)=>{
    const products = await Products.find();
  //  console.log(products);
    const {getbycategory}=require('../utils/libary');
    let data =getbycategory(products);
    // res.send(data);
   res.render('admin/products-list',{
    products:data,
    isAdmin:true
   });
}

module.exports.getProductsAdd= async(req,res,next)=>{
   res.render('admin/products-add',{
    isAdmin:true
   });
}

module.exports.postProductsAdd = async (req, res, next) => {
    const { name, price, description, imageURL, seller, category } = req.body;
    try {
        await Products.create({
            name,
            price,
            description,
            imageURL,
            seller,
            category
        });
        res.redirect('/admin/products/all',{
            isAdmin:true
           });
    }
    catch (err) {
        res.send(err)
    };
}
module.exports.getProductsUpdate= async(req,res,next)=>{
    console.log("hii");
    const {id}= req.params;
    const product = await Products.findById(id);
    console.log(product);
    res.render('admin/products-update',{product,
        isAdmin:true
    });
 }

 module.exports.postProductsUpdate=async(req,res,next)=>{
    const { name, price, description, imageURL, seller ,id} = req.body;
    try {
        let p=await Products.findById(id)
            p.name=name,
            p.price=price,
            p.description=description,
            p.imageURL=imageURL,
            p.seller=seller
            await p.save();
            res.redirect('/admin/products/all');
    }
    catch (err) {
        res.send(err)
    };
 }
 module.exports.getProductsDelete= async(req,res,next)=>{
    const {id}=req.params;
    await Products.deleteOne({_id:id});
    res.redirect('/admin/products/all',{
        isAdmin : true
       });
 }