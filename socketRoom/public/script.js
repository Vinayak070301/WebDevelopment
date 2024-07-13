let cppbtn=document.querySelector('.cpp');
let javabtn=document.querySelector('.java');
let pythonbtn = document.querySelector('.python');
let chatBoxes=document.querySelectorAll('.chatbox');
let cpsend=document.querySelector('.cppsend')
let socket = io();
cppbtn.addEventListener('click' ,(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })

    socket.emit('subscribecpp',{
        id:socket.id
    })
    socket.on('newjoinercpp',(data)=>{
        console.log(data.msg);
    })
})

cpsend.addEventListener('click',(ev)=>{
  ev.preventDefault();
  let msg = document.querySelector('.cppmsg').value;
  socket.emit('cppmsgsend',{
    msg:msg,
  })
})

socket.on('cpprecmsg',(data)=>{
    let cppchat=document.querySelector('.cppchat')
    let li=document.createElement('li');
    li.innerText=data.msg;
    cppchat.appendChild(li);
})









javabtn.addEventListener('click' ,(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })
})
pythonbtn.addEventListener('click' ,(ev)=>{
    let btnName = ev.target.innerText.toLowerCase();
    // console.log(btnName);
    chatBoxes.forEach(chatBox => {
        if (chatBox.getAttribute('id') == btnName) {
            chatBox.classList.remove('hidden');
        }
        else {
            chatBox.classList.add('hidden');
        }
    })
})

