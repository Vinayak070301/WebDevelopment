const express=require('express');
const path =require('path')
const app=express();
const port=3000;
app.use(express.static(path.join(__dirname,'public')))

let todos=["dancing","coding","singing"];

app.get('/todos',(req,res)=>{
    res.send(todos);
})

app.get('/gettask',(req,res)=>{
    let {task}=req.query
    if(!todos.includes(task)){
        todos.push(task);
    }
    
    res.redirect('/todos')
})

app.get('/increase',(req,res)=>{
    let {task}=req.query
    let index=todos.indexOf(task);
    if(index>0 && index<todos.length){
        let temp=todos[index]
        todos[index]=todos[index-1]
        todos[index-1]=temp
    }
    res.redirect('/todos');
})
app.get('/decrease',(req,res)=>{
    let {task}=req.query
    let index=todos.indexOf(task);
    if(index>=0 && index<todos.length-1){
        let temp=todos[index]
        todos[index]=todos[index+1]
        todos[index+1]=temp
    }
    res.redirect('/todos');
})
app.get('/delete',(req,res)=>{
    let {task}=req.query
    todos=todos.filter(d=>d!=task);
    res.redirect('/todos');
})
app.listen(port,()=>{
    console.log('server is running on port '+port);
});