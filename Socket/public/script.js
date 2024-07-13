const socket=io();

$('#chat-box').hide();

$('#send').on('click',()=>{
    const message=$('#inp').val();
    //msg bhejna send ek request name hai kuch bhi hoskata hai per recieved side bhi same hoga
    socket.emit('send',{msg:message})
    $('#inp').val('');
})
socket.on('recieved',(data)=>{
    $('#chat').append(`<li class="border p-2 ms-0 mb-2 rounded-pill"><span class="fw-bold">${data.username} ${data.msg}</span></li>`)
})

$('#login').on('click',()=>{
    const username=$('#username').val();
    //msg bhejna send ek request name hai kuch bhi hoskata hai per recieved side bhi same hoga
    socket.emit('login',{username:username})
    $('#login-box').hide();
    $('#chat-box').show();

    $('#username').val('');
})