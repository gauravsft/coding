var n=10;
factorial(10);

function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    console.log(fact);
}