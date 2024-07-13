const path=require('path');
const express=require('express');
const app=express();
//midleware 
app.use(express.static(path.join(__dirname,'/Public')));
app.use(express.urlencoded({extended:true}));//this will make the body readable at backend post request mai;
app.use(express.json());//to make axios data readable by post request

let todos=["dancing","cycling","coding","biking"]//
//Get todos an return all todos
app.get('/todos',(req,res)=>{
  res.send(todos);
})
//Post '/todos':add an neww task 
app.post('/todos',(req,res)=>{
 let {newtask}=req.query;
 todos.push(newtask);
 res.send(todos);
})
//Get'/deletetask'
app.get('/delete',(req,res)=>{
    const {name}=req.query;
    todos.filter(t=>t !== name );
    res.send(todos);
})
//get'/increasetask'
app.get('/increase',(req,res)=>{
   let {name}=req.query;
   let index=todos.indexOf(name);
   if(index>0 && index<todos.length){
   let temp=todos[index];
   todos[index]=todos[index-1];
   todos[index-1]=temp;}
   res.send(todos);
})
//get'/decreasetask'
app.get('/decrease',(req,res)=>{
    let {name}=req.query;
    let index=todos.indexOf(name);
    if(index>=0 && index<todos.length-1){
    let temp=todos[index];
    todos[index]=todos[index=+1];
    todos[index+1]=temp;}
    res.send(todos);
 })
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})