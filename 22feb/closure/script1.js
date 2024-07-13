function GF (){
    var x=1;
    function parent(){
        x++
        function child(){
            x++;
             console.log(x)
        }
        return child;
    }
    return parent
}

let fun=GF();//x=1

let f1=fun();//x=2
let f2=fun();//x=3

f1();//4
f1();//5
f2();//6
f2();//7