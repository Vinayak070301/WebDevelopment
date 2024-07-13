let arr=[1,2,3,4,5];
let newarr=[];
Array.prototype.myreduce=function(fun){
    let arr=this;
    acc=0;
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        acc=fun(acc,value,i,arr);
    }
    return acc;
 }
let x=arr.myreduce((acc,val,index,arr)=>{
    return acc+val;
})
console.log(x)