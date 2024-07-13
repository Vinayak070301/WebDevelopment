let a=[1,2,3,4,"hellow"]
console.log(a)
//next line
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
for(let k of a){
    console.log(a[k])
}
//inline 
let str=""
for(let i=0;i<a.length;i++){
    str+=a[i]+" "
}
console.log(str)

//input runtime
console.log(process.argv);

let in1=process.argv["2"]
let in2=process.argv["3"]
let in3=process.argv["4"]
console.log(in1,in2,in3)