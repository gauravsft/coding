

// Find the last occurence of a number in an array

var number=[4,3,1,3,5,3,7];
var n=7;
var i=n-1;
var key=3;
console.log(lastoccurance(number,i,key));

function lastoccurance(arr,i,key){
    if(i<0){
        return -1;
    }
    if(arr[i]==key){
        return i;
    }
    return lastoccurance(arr, i-1, key);
}