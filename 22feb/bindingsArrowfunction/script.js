let obj={
    a:1,
    b:2,
    fun:function(){//this use kiya hai
        console.log(this);
        this.c="hello"
    }
}
obj.fun();
console.log(obj)




let obj1={
    a:1,
    b:2,
    fun:()=>{//arrow function use kiya  hua hai 
        console.log(this);
        this.c="hello"
    }
}
obj1.fun();
console.log(obj1)


function hello1(){
    console.log(this);
    let world=function(){
        console.log(this)
    }
    world()
}

let person1={
    name:"chandan",
    ager:20
}
hello1.call(person1);

function hello(){
    console.log(this);
    let world=()=>{
        console.log(this)
    }
    world()
}

let person={
    name:"chandan",
    ager:20
}
hello.call(person);