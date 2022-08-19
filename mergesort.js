
var arr=[12,49,12,96,45,86,99,1,25,56]
mergeSort(arr,0,arr.length-1);
var str="";
for(var i=0;i<arr.length;i++){
    str+=arr[i]+" ";
}
console.log(str);

function merge(arr,l,mid,r){
    var n1=mid-l+1;
    var n2=r-mid;

    var a= new Array(n1);

    var b=new Array(n2);     // temp array

    for(var i=0;i<n1;i++){
        a[i]=arr[l+i];
    }
    for(var j=0;j<n2;j++){
        b[j]=arr[mid+j+1];
    }

    var i=0;
    var j=0;
    var k = l;
    while (i < n1 && j < n2) {
        if (a[i] <= b[j]) {
            arr[k] = a[i];
            i++;
        }
        else {
            arr[k] = b[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = a[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = b[j];
        j++;
        k++;
    }



}
function mergeSort(arr,l,r){

    if(l<r){
        var mid=Math.floor((l+r)/2);
        mergeSort(arr,l,mid);
        mergeSort(arr,mid+1,r);

        merge(arr,l,mid,r);
    }
}