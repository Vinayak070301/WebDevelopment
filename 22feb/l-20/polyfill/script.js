let arr=[1,2,3,4,5];
Array.prototype.meraforeach=function (fun){
    let arr=this;
    //fun=(data,index,arr)=>{
    //console.log("Index :",index," Data :",data," array :",arr);
    //}
    for(let i=0;i<arr.length;i++){
        fun(arr[i],i,arr);
    }
}
arr.meraforeach((data,index,arr)=>{
    console.log("Index :",index," Data :",data," array :",arr);
})