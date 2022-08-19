var n=5;
var m=5;

var val=1;
for(var i=1;i<=n;i++){
    var str="";
    for(var j=1;j<=i;j++){
        str+=val+" ";
        val++;
    }
    console.log(str);
}