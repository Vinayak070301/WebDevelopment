obj={
    a:1,
    b:"true",
    c:123.23,
    "":4
}
//not for empty key
console.log(obj.a)
//for all
console.log(obj[""])

//for in is only for objects
for (let k in obj){
    console.log(obj[k])
}
