var a=42;
var b=24;

while(b!==0){
    var reminder=a%b;
    a=b;
    b=reminder;
}
console.log(a);