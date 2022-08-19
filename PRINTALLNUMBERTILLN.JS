var n=10;
var j=2;
while (j<=n) {
    var i=1;
    var count=0;
    while(i<=j){    
        if(j%i===0){
            count++;
        }
        i++;
    }
    if(count==2){
        console.log(j);
    }
    j++;
    
}
