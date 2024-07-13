let loginbtn=document.querySelector('.login-btn');
const socket=io();
let login = document.querySelector('.login');
let chatApplication = document.querySelector('.chat-application');
loginbtn.addEventListener('click',(ev)=>{
    let username=document.querySelector('.username').value;
    if(username.length>0){
        socket.emit('userlogin',{
            username:username,
            id:socket.id
        })
    }else{
        alert('Please enter your username');
    }
})
socket.on('newuserjoined', ({ msg }) => {
    console.log("Message ", msg);
})
socket.on('updatedetails', ({ msg, username, clients, clientsCount }) => {
    if (clientsCount)
        document.querySelector('.active-users').innerText = clientsCount;
    let allUsers = document.querySelector('.all-users-status');
    allUsers.innerText = '';
    clients.forEach(c => {
        if (c.id != socket.id) {
            let li = document.createElement('li');
            li.innerText = c.name;
            allUsers.appendChild(li);
        }
    });

})

socket.on('useradded',({msg,username,client,clientCount})=>{
    if(clientCount)
        document.querySelector('.active-users').innerText = clientCount;
    login.style.display='none';
    chatApplication.style.display='block';
    let currentuser=document.querySelector('.current-user');
    currentuser.innerText=username;

})

document.querySelector('.send-button').addEventListener('click',({msg,client,clientCount})=>{
    let message=document.querySelector('.message-input').value;
    if(message.length>0){
        document.querySelector('.message-input')='';
        socket.emit('message',{
            msg:message,
            id:socket.id,
        })
    }else{
        alert('Please enter your message');
    }
})

socket.on('message_rec',(data)=>{
    let chats=document.querySelector('.chats');
    let chat=document.createElement('div');
    document.querySelector('.active-users').innerText=clientCount;
    chat.classList.add('chat');
    let chatMessage=document.createElement('div');
    chatMessage.classList.add('chat-message');
    if(data.id==socket.id){
        chatMessage.innerText = `${message}`;
        chatMessage.classList.add('my-chat');
    } else {
        chatMessage.innerText = `${username} : ${message}`;
        chatMessage.classList.add('another-chat');
    }
    chat.appendChild(chatMessage);
    chats.appendChild(chat);
})
socket.on('updateDetailsAll', ({ msg, clients, clientsCount }) => {
    console.log(msg);
    if (clientsCount)
        document.querySelector('.active-users').innerText = clientsCount;
    let allUsers = document.querySelector('.all-users-status');
    allUsers.innerText = '';
    clients.forEach(c => {
        if (c.id != socket.id) {
            let li = document.createElement('li');
            li.innerText = c.name;
            allUsers.appendChild(li);
        }
    });
})