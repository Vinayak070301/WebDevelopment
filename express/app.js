const express= require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello World')
});
app.get('/a',(req,res)=>{
    res.send('Hello World at b')
});
app.get('/greet/:name',(req,res)=>{
    console.log(req.params)
    res.send(`Hello bhai ki kya haal chal ${req.params.name}`)
});
app.listen(3000);
