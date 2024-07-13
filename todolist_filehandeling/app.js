const path=require('path');
const express=require('express');
const app=express();
//midleware 
app.use(express.urlencoded({extended:true}));//this will make the body readable at backend post request mai;
app.use(express.json());//to make axios data readable by post request
app.use(express.static(path.join(__dirname,'../public')));

//Get api routes/paths
app.get('/',(res,req)=>{
  
})
//post api routes/paths
app.post("/submit_form",(req,res)=>{
 console.log('BODY' ,req.body);
 const {username,password}=req.body;
 res.send(`recieved post request on ${username},${password}`);
})

app.listen(4444,()=>{
    console.log("server is running on port 4444");
})