let movies=document.querySelectorAll('.movies');
movies.forEach((item)=>{
    item.style.color='red';
    item.style.fontSize='30px';
})
let body=document.querySelector('body')
let x=1;
setInterval(()=>{
    x=1-x;
    if(x){
        body.style.backgroundColor='red'
    }else{
        body.style.backgroundColor='white'
    }
},1000)