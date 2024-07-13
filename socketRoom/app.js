const path = require('path');
const express = require('express');
const app = express();//instance
const http  = require('http');
const server = http.createServer(app);
const socketio =require('socket.io')
const PORT = 4444;
const io=socketio(server);

 io.on('connection',(socket)=>{
      socket.on('subscribecpp',(data)=>{
        console.log(data);
        socket.join('cpp');
        io.to('cpp').emit('newjoinercpp',{
            msg:"new user has joined the cpp group"
        })
      })
      socket.on('cppmsgsend',(data)=>{
        io.emit('cpprecmsg',{
            msg:data.msg
        })
    })
 })


app.use('/',express.static(path.join(__dirname,'public')))

server.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});