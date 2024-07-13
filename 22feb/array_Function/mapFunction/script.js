let arr=[1,2,3,4,5];
let newarr=arr.map(function(val,index,arr){
   console.log("value:",val,"Index :",index,"arr",arr);
   return val*val ;
})
console.log(newarr)

let newarr1=arr.map((val,index,arr)=>{
    console.log("value:",val,"Index :",index,"arr",arr);
   return val*val ;
})//(val=>val*val)//// [yeh bhi likh sakte hai]
console.log(newarr1)
let boolans=arr.map((val)=>{
    if(val%2==1)return true;
    return false;
})
console.log(boolans)
