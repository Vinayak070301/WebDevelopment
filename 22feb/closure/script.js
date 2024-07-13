function parent(){
    var x=1;
    function child(){
        x++;
         console.log(x)
    }
    return child;
}

var f=parent();
var f1=parent ();

f();//2
f1();//2
f();//3
f1();//3
f();//4
f1();//4
f();//5
f1();//5
f();//6
f1();//6
