//fun sayhi jaha aega
sayhi("samarth") // fun top pe chalejate hai js me it can be n number of function
//var x jaha
console.log(x)//undefined isslea hua kuki var hoist hua per value nhi hua  


function sayhi(name){
   console.log("Hellow "+name);
}
//x=10 aisa hoga js me
var x=10

console.log(x)



//var sayhellow bana to undefined hai function kaisay call hoga
// sayhello("vinayak")// erroe aega yaha  kuki 

var sayhello=function (name){
    console.log("Hellow "+name);
 }
 //sayhello=fun(){} hoga tab next wali line call hoge
 sayhello("natasha")

 //LHS hoist hota hai RHS nhi LHS=RHS


//var i due to hgoisting it become global varaibale 
//var ka fuctional scope hota hai na ki loop ka
 for(var i=0;i<10;i++){

 }
 console.log(i) //10