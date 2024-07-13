const btn=document.querySelector('.btn')
const inp=document.querySelector('.inp')
const taskList=document.querySelector('.taskList')
function updatetasklist(todos){
    taskList.innerHTML='';
    todos.forEach(e => {
        let li=document.createElement('li');
        li.classList.add('item');
        li.innerHTML =`<span class="'content">${e}</span>
        <div class="btngroup">
            <button class="btn1 upbtn">↑</button>
            <button class="btn1 downbtn">↓</button>
            <button class="btn1 crossbtn">x</button>
        </div>`;
        taskList.appendChild(li);
    });
}
btn.addEventListener('click' ,async(ev)=>{
    ev.preventDefault();
    try{
        let {data}=await axios.get(`/gettask?task=${inp.value}`)
        updatetasklist(data);
    }catch(err){
        alert(err.message);
    }
})
async function intialtodolist(){
    try{
        let {data}=await axios.get('/todos');
        updatetasklist(data);
    }catch(error){
        alert(error.message)
    }
    }
    intialtodolist();

taskList.addEventListener('click',async(ev)=>{
    let item=ev.target;
    if(item.classList.contains('upbtn')){
        let{data}=await axios.get(`/increase?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetasklist(data);
    }else if(item.classList.contains('downbtn')){
        let{data}=await axios.get(`/decrease?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetasklist(data);
    }else if(item.classList.contains('crossbtn')){
        let{data}=await axios.get(`/delete?task=${item.parentElement.previousElementSibling.innerText}`)
        updatetasklist(data);
    }
})