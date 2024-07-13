const path=require('path');
const express=require('express');
const app=express();

//midleware 
app.use(express.static(path.join(__dirname,'/Public')));
app.use(express.urlencoded({extended:true}));//this will make the body readable at backend post request mai;
app.use(express.json());//to make axios data readable by post request

const Tasks=require('./conroller/task.js')

app.get('/todos',(req,res)=>{
    Tasks.getTodos()
    .then(todos=>{
        console.log("todos")
        res.send(todos);
    
    })
    .catch(err=>{
    res.send(err);
    })
})

app.post('/todos',(req,res)=>{
    const {name}=req.body;
    Tasks.addTask(name)
    .then(msg=>{
        console.log(msg);
        res.redirect('/todos');
    
    })
    .catch(err=>{
    res.send(err);
    })
})
app.get('/delete',(req,res)=>{
    const {name}=req.query;
    Tasks.deleteTask(name)
    .then(msg=>{
        console.log(msg);
        res.redirect('/todos');
    
    })
    .catch(err=>{
    res.send(err);
    })
})
app.get('/increase',(req,res)=>{
    const {name}=req.query;
    Tasks.increaseTask(name)
    .then(msg=>{
        console.log(msg);
        res.redirect('/todos');
    
    })
    .catch(err=>{
    res.send(err);
    })
})
app.get('/decrease',(req,res)=>{
    const {name}=req.query;
    Tasks.decreaseTask(name)
    .then(msg=>{
        console.log(msg);
        res.redirect('/todos');
    
    })
    .catch(err=>{
    res.send(err);
    })
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})