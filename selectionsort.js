var n=5;
var arr=[8,96,55,60,48];

selectionSort(arr,n);


function selectionSort(arr,n){
    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if(arr[j]<arr[i]){
                var temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
            }
        }
    }
    print(arr,n);
}

function print(arr,n){
    var str="";
    for(var i=0;i<n;i++){
        str+=arr[i]+" ";
    }
    console.log(str);
}