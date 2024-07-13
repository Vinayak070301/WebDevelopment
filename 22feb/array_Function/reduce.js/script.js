let arr=[1,2,3,4,5];
let n=arr.reduce((acc,val)=>{
     return acc*val;
})
console.log(n)

let n1=arr.reduce((acc,val)=>{
     return acc*val;
},5)//denote the intial value of acclumulator
console.log(n1)
Array.prototype.myReduce=function(fun){
    let arr=this;
    let acc=arr[0];
     for(let i=1;i<arr.length;i++){
          acc=fun(acc,arr[i],i,arr)
     }
     return acc;
}
let n2=arr.myReduce((acc,val)=>{
     return acc*val;
},5)//denote the intial value of acclumulator
console.log(n1)
