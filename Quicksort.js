
var arr=[5,9,2,1,9,3,585,6,32];       //input
quickSort(arr,0,arr.length-1);       //Function call
var str="";                             
for(var i=0;i<arr.length;i++){          //print sorted arry using for loop
    str+=arr[i] +" ";
}
console.log(str);                       

function swap(arr,i,j){                 //swap function
    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function partition(arr,l,r){            //partition function
    var pivot=arr[r];
    var i=l-1;

    for(var j=l;j<r;j++){
        if(arr[j]<pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,r);
    return i+1;
}


function quickSort(arr,l,r){            //Quicksort function
    if(l<r){
        var pi=partition(arr,l,r);
        quickSort(arr,l,pi-1);
        quickSort(arr,pi+1,r);
    }
}


// qucick sort time complexity   
// 1. best case :- nlogn
// 2. worst case :- n²