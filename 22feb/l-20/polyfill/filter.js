let arr=[1,2,3,4,5];
let newarr=[];
Array.prototype.myfilter=function(fun){
    let arr=this;
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        let newval=fun(value,i,arr);
        if(value%2==0){
        newarr.push(newval);}
    }
    return newarr;
 }
let x=arr.myfilter((val,index,arr)=>{
  return val;
})
console.log(x)