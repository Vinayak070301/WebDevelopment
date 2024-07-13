const path=require('path');
const express=require('express');
const app=express();
const port=4444;
const hbs = require('hbs');
hbs.registerPartials(path.join(__dirname + '/views/partials'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));

let todos = ["Cricket", "Dance", "Sing", "Hockey"];

app.get('/',(req,res)=>{
    res.render('index',{
        todos
    })
})
app.post('/',(req,res)=>{
    try{
    let {name}=req.body;
    todos=todos.push(name);
    res.redirect('/');}
    catch(err){
        res.send(err);

    }
})
app.get('/increase',(req,res)=>{
    try{
        let {name}=req.query;
        let index=todos.indexOf(name);
        if(index>0)
            [todos[index],todos[index-1]]=[todos[index-1],todos[index]];
        res.redirect('/');  
        }catch(err){
            res.send(err);
            
        }
    
})
app.get('/decrease',(req,res)=>{
    try{
        let {name}=req.query;
        let index=todos.indexOf(name);
        if(index<todos.length-1)
            [todos[index],todos[index+1]]=[todos[index+1],todos[index]];
        res.redirect('/');
        }catch(err){
            res.send(err);
            
        }
    
})
app.get('/delete',(req,res)=>{
    try{
        let {name}=req.query;
        todos=todos.filter(t => t!== name);
        res.redirect('/');
    }catch(err){
        res.send(err);
    }
    
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})