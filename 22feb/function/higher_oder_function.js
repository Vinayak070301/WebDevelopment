function outer(){
    function inner(){
        console.log("hello")
        //function ki ander kuch return nhi karne say vo undefine reture karta hai 
    }
    return inner
}
let f=outer();
console.log(f())



// Passing fuction as argument HOF
function add(a,b){
return a+b;
}
function sub(a,b){
    return a-b;
}

function doopration(add,sub){
    console.log(add(30,20));
    console.log(sub(20,10));
}
doopration(add,sub);