var arr=[ [1,2,3,4],[5,6,7,8],[9,10,11,12] ,[15,16,17,18] ];
var row=4,col=4,target=16;
var r=0;
var c=col-1;
var flag=false;
while(r<row && c>=0){
    if(arr[r][c]==target){
        flag=true;
        console.log(r,c);
    }
    if(arr[r][c]>target){
        c--;
    }
    else{
        r++;
    }
}
if(flag==true){
    console.log("Element found !");
}
else{
    console.log("Element not found !");
}