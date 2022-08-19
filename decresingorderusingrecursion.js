

//  print number till n in decreasing order using recursion

var n=10;
 
dec(n);

function dec(n){
    
    if(n===0){
        return;
    } 
    console.log(n);
    dec(n-1);
}