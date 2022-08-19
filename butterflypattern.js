var n=5;
var m=5;
up(n);
lb(n);

function up(n){
    for(var i=1;i<=n;i++){
        var str1="";
        for(var j=1;j<=i;j++){
            str1+="*"+" ";
        }
        var space=2*n-2*i;
        for(var k=0;k<space;k++){
            str1+="  ";
        }
        for(var j=1;j<=i;j++){
            str1+="*"+" ";
        }
        console.log(str1);
    }
}
function lb(n){
    for(var i=n;i>=1;i--){
        var str2="";
        for(var j=1;j<=i;j++){
            str2+="*"+" ";
        }
        var space=2*n-2*i;
        for(var k=0;k<space;k++){
            str2+="  ";
        }
        for(var j=1;j<=i;j++){
            str2+="*"+" ";
        }
        console.log(str2);
    }
}
