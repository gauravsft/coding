var n=1254;

var reverse=0;
while(n>0){
    var lastdigit=n%10;
    reverse=reverse*10+lastdigit;
    n=Math.floor(n/10);
}
console.log(reverse);