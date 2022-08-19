
// var arr=[1,2,3];
// console.log(permutation(arr,0))

// function permutation(arr,index){
//     if(index==arr.length){
//         return arr;
//     }
//     for(var i=index;i<arr.length;i++){
//         swap(arr[i],arr[index]);
//         permutation(arr,index+1);
//         swap(arr[i],arr[index]);
//     }
//     return;
// }
// function swap(arr,x,y){
//     var temp=arr[x];
//     arr[x]=arr[y];
//     arr[y]=temp;
// }
var arr=[1,2,3];
arr.sort(function(a,b){return a-b});
do{
    console.log(arr);
}while((function(a,b){return a-b}));
