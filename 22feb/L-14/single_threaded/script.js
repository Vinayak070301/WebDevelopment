function delayofsec(){
    let curr=new Date().getTime();
    while(new Date().getTime()-curr<1000){

    }
}
function delaynsec(n){
 for(let i=0;i<n;i++){
    delayofsec();
 }
}
delaynsec(5)
console.log("hello world")
