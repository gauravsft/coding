var n=5;
var r=2;
var ncr=factorial(n)/(factorial(n-r)*factorial(r));
console.log(ncr);

function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}