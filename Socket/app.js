const path = require('path');
const express = require('express');
const app = express();//instance
const http  = require('http');
const server = http.createServer(app);
const socketio =require('socket.io')
const PORT = 4444;
const io=socketio(server);//socket io http ki top pe banta hai isslea vo server to contain karery ga
console.log(io);
let user=[];
//setup the connection  ON is for reciever
io.on("connection",(socket)=>{
    console.log("connection stablished");

    socket.on('send' ,(data)=>{
        io.emit('recieved' , {
            msg:data.msg,
            username:user[socket.id]
        })
    })
    socket.on('login',(data)=>{
        
        user[socket.id]=data.username;
        console.log(user[socket.id]);
    })
})



//serving static file
app.use('/',express.static(path.join(__dirname,'public')))

server.listen(PORT, () => {
    console.log(`server is connected : ` + PORT);
});