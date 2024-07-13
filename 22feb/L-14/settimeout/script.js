// let id=setTimeout(function(){
//     console.log("hellow World");
// },5000);
//  console.log(id)
// //yeh print nhi hone dega
// setTimeout(function(){
//     clearTimeout(id);
// },4000);
// //yeh hone dega print because 5000<6000 print hone ki bad id clear karey ga

// setTimeout(function(){
//     clearTimeout(id);
// },6000);

// console.log("hey there")







let id=setTimeout(function(){
        console.log("hellow World");
    },3000,setTimeout(function(){
            clearTimeout(id);
        },5000));

