

//  print number till n in increasing order using recursion

var n=10;
 
inc(n);

function inc(n){
    
    if(n===0){
        return;
    } 
    inc(n-1);
    console.log(n);
}