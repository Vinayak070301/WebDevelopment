const path=require('path');
const express=require('express');
const app=express();
const port=3000;
const User=require('./models/user')
const mongoose=require('mongoose');

app.set('view engine', 'hbs');
app.use( express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


const hbs=require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(async (req,res,next)=>{
    let user = await User.findOne({
        _id: "6658cd533fbc6d47cecdcdf6"
    });
    req.user = user;
    next();
})

const admin=require('./routes/admin');
app.use('/admin',admin);


const shop=require('./routes/shop');
app.use('/shop',shop);


app.get('/',(req,res)=>{
    res.render('index');
})

console.log("yaha");








mongoose.connect('mongodb://127.0.0.1:27017/ecommerse')
.then(
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
)
.catch(error => {
    console.error(error);
});



