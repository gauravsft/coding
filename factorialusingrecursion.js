var n=5;

console.log(factorial(n));

function factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n * factorial(n-1);
}