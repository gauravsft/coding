var n=4;
var m=4;


for(var i=0;i<n;i++){
    var str='';
    for(var j=0;j<m;j++){
        if(i===0 ||j===0||i==n-1||j==m-1){
            str+="*"+" ";
        }
        else{
            str+="  ";
        }
    }
    console.log(str);
}
