var n=3;
var m=9;


for(var i=1;i<=n;i++){
    var str="";
    for(var j=1;j<=m;j++){
        if((i+j)%4===0 || (i==2 && j%4==0)){
            str+="*"+" ";
        }
        else{
            str+="  ";
        }
    }
    console.log(str);
}