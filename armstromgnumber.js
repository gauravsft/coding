var n=376;
var m=n;

var sum=0;
while(n>0){
    var lastdigit=n%10;
    sum+=Math.pow(lastdigit,3);
    n=Math.floor(n/10);
}
if(sum==m){
    console.log("Armstrong number");
}
else{
    console.log("Not armstrong number");
}