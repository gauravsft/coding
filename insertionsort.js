var n=5;
var arr=[8,96,55,60,48];

insertionsort(arr,n);


function insertionsort(arr,n){
    for(var i=1;i<n;i++){
        var current=arr[i];
        var j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    
    console.log(arr);
    //print(arr,n);
}

// function print(arr,n){
//     var str="";
//     for(var i=0;i<n;i++){
//         str+=arr[i]+" ";
//     }
//     console.log(str);
// }