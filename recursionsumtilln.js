var n=10;
console.log(sum(n));
function sum(n){
    if(n==0){
        return 0;
    }
    return n + sum(n-1);
}