const path = require('path');
const express = require('express');
const app = express();
const { createServer } = require('http');
const { Server } = require('socket.io');
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
const PORT = 4444;

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
let userMap={};

io.on('connection',(socket)=>{
    socket.on('userlogin',async(data)=>{
        console.log(socket.id==data.id);

         userMap[socket.id]=data.username;
        // console.log(userMap);
         let clients=[];
         let sockets=await io.fetchSockets();
         sockets.forEach(socket=>{
            if(userMap[socket.id]){
                clients.push({id:socket.id,name:userMap[socket.id]});
            }
         })
         console.log(clients);
      })
    socket.emit('useradded',{
        msg: "User added successfully",
            username: userMap[socket.id],
            clients,
            clientsCount: clients.length
    })

    socket.broadcast.emit('updatedetails',{
        msg: "New users are added!",
        client,
        clientCount: client.length
    })
    socket.on('message',(data)=>{
        let clients=[];
        console.log(io.sockets.sockets);
        io.sockets.sockets.forEach(c=>clients.push({
            "name":userMap[c.id],
             "id":c.id,
             clientCount:io.engine.clientsCount

        }));

        io.emit('message_rec',{
            msg:data.msg,
            username:userMap[socket.id],
            id:socket.id,
            clients,
            clientCount:io.engine.clientsCount
        });
    })
    socket.on('disconnect',async ()=>{
        let sockets = await io.fetchSockets();
        let newUserMap={}
        let clients = [];
        sockets.forEach(socket=>{
            if(userMap[socket.id]){
                newUserMap[socket.id] = userMap[socket.id];
                clients.push({id: socket.id,name: userMap[socket.id]});
            }
        })
        userMap = newUserMap;
        io.emit('updateDetailsAll',{
            msg: "A User left the chat!",
            clients,
            clientsCount: clients.length
        })
    })
})

app.use(express.static(path.join(__dirname, 'public')));






httpServer.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
});