const path=require('path');
const express=require('express');
const app=express();
//midleware 
app.use(express.urlencoded({extended:true}));//this will make the body readable at backend post request mai;
app.use(express.json());//to make axios data readable by post request

let teachers=["kartik","monu","sabeel","mosina"];
let students=["vinayak","archana","shivam","ishan"];

//Get '/students':get detail of all student

app.get('/students',(req,res)=>{
    res.send(students);
})
//Post '/students':post add one student to students[]
app.post('/student',(req,res)=>{
    let {student}=req.body;
    students.push(student);
    res.redirect(students);
})
//post '/student/remove':remove the student by name
app.post('/student/remove',(req,res)=>{
    let {name}=req.body;
    students=students.filter(t=>t!==name);
    res.redirect(students);
})
//Get '/teachers':get detail of all teacher
app.get('/teachers',(req,res)=>{
    res.send(teachers);
})
//post '/teachers/update':update the name of the teacher using body{oldname,newName}
app.post('/teachers/update',(req,res)=>{
    let {oldname,newname}=req.body;
    let index=teachers.indexOf(oldname);
       a[index]=newname;
       res.redirect(teachers);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})