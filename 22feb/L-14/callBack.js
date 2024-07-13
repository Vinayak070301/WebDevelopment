function maggileao(cd){
     console.log("market say maggi le aao")
     setTimeout (function(){
        console.log("market say le aae")
        cd(maggikhao)
     },5000)
}
function maggibanao(cb){
    console.log("maggi bana  rahi hai")
    setTimeout (function(){
        console.log("maggi ban gae")
        cb(maggikhao)
    },5000)
}
function maggikhao(){
    console.log("maggi kha raha hu")
    setTimeout (function(){
        console.log("maggi kha chuka")
    },5000)
}
maggileao(maggibanao)
