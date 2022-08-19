var n=5;
var arr=[98,96,55,60,8];

bublesort(arr,n);


function bublesort(arr,n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    //print(arr,n);
    console.log(arr);
}

// function print(arr,n){
//     var str="";
//     for(var i=0;i<n;i++){
//         str+=arr[i]+" ";
//     }
//     console.log(str);
// }