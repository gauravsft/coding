var n=5;
var m=5;


for(var i=0;i<n;i++){
    var str="";
    for(var j=0;j<m;j++){
        if(j<m-i-1){
            str+="  ";
        }
        else{
            str+="*"+" ";
        }
    }
    console.log(str);
}