var arr=[1,2,3,4,5,5,7];  //this is sorted array
var arr1=[1,5,8,7,15,9,2];  //this is unsorted array
var n=7;


console.log(sorted(arr,n));
console.log(sorted(arr1,n));

function sorted(arr,n){
    if(n==1 || n===0){
        return true;
    }
    return arr[n - 1] >= arr[n - 2] && sorted(arr, n - 1);
}