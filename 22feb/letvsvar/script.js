//let is block scope,hoist nhi hots hai
//var is functional scope,hoist hota hai

for(let i=0;i<10;i++){

}
console.log(i)//error

for(var j=0;j<10;j++){

}
console.log(j)//10