let arr=[1,2,3,4,5];
let newarr=[];
Array.prototype.mymap=function(fun){
    let arr=this;
    for(let i=0;i<arr.length;i++){
        let value=arr[i];
        let newval=fun(value,i,arr);
        newarr.push(newval);
    }
    return newarr;
 }
let x=arr.mymap((val,index,arr)=>{
    return val*val;
})
console.log(x)