var arr=[ [1,2,3,4],[5,6,7,8],[9,10,11,12] ,[15,16,17,18] ];
var m=4;
var n=4;

var str=" ";
for(var i=0;i<n;i++){
    str+=arr[0][i]+" ";
}
for(var j=1;j<m;j++){
    str+=arr[j][n-1]+" ";
}
for(var k=n-2;k>=0;k--){
    str+=arr[m-1][k]+" ";
}
for(var l=m-2;l>0;l--){
    str+=arr[l][0]+" ";
}
console.log(str);
