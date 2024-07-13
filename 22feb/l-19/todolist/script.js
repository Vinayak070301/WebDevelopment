let inp=document.querySelector('.inp');
let btn=document.querySelector(".btn");

let tasklist=document.querySelector('.taskList');
btn.addEventListener('click', ()=>{
let taskname=inp.value;
let li=document.createElement('li');
li.innerHTML=`  
<span class="taskText">${taskname}</span>
<button class="upBtn">↑</button>
<button class="downBtn">↓</button>
<button class="deleteBtn">X</button>
`;
li.classList.add('taskItem');
taskList.appendChild(li);
inp.value='';
})

tasklist.addEventListener('click',(ev)=>{
    let item=ev.target;
    if(item.classList.contains('upBtn')){
        let parentElement=item.parentElement;
        let previousElement=parentElement.previousElementSibling;
        tasklist.insertBefore(parentElement,previousElement);

    }else if (item.classList.contains('downBtn')) {
        let parentElement=item.parentElement;
        let nextElement=parentElement.nextElementSibling;
        tasklist.insertBefore(nextElement,parentElement);

    }else if (item.classList.contains('deleteBtn')){
        let parentElement=item.parentElement;
        parentElement.remove();
    }
})