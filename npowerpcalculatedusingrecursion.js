var n=10;
var p=2;

console.log(power(n,p));

function power(n,p){
    if(p===0){
        return 1;
    }

    return n * power(n ,p-1);
}