var n=10;
fib(n)

function fib(n){
    var f=0;
    var s=1;
    var nextterm;

    for(var i=1;i<=n;i++){
        console.log(f);
        nextterm=f+s;
        f=s;
        s=nextterm;
    }
}