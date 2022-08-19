

// Find the first occurence of a number in an array

var number=[4,3,1,3,5,3,7];
var n=7;
var key=3;
console.log(firstoccurance(number,n,0,key));

function firstoccurance(arr,n,i,key){
    if(i==n){
        return -1;
    }
    if(arr[i]==key){
        return i;
    }
    return firstoccurance(arr,n,i+1,key);
}