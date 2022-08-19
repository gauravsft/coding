var n=10;
var i=1;
var count=0;
while(i<=n){
    if(n%i===0){
        count++;
    }
    i++;
}
if(count==2){
    console.log("Prime");
}
else{
    console.log("Not Prime");
}