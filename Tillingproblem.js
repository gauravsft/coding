
// Given a "2 x n" board and size " 2 x 1 ",count the number of ways to tie the given board using these tiles
var n=4;
console.log(tillingway(n))

function tillingway(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }

    return tillingway(n-1) + tillingway(n-2);
}