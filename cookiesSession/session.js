const path=require('path');
const express=require('express');
const app=express();
const port=3000;

app.set('view engine', 'hbs');
app.use( express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));


const hbs=require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

//cookies
const Session=require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))
  




app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})