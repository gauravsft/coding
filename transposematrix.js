var arr=[ [1,2,3,4],[5,6,7,8],[9,10,11,12] ,[15,16,17,18] ];
var m=4;
var n=4;
transpose(arr);


// for(var i=0;i<m;i++){
//     var str=" ";
//     for(j=0;j<n;j++){
//         str+=arr[j][i]+" ";
//     }
//     console.log(str);
// }


function transpose(mat) {
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < i; j++) {
            var tmp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = tmp;
        }
    }
    print(mat);
}


function print(arr){
    for(var i=0;i<arr.length;i++){
        var str='';
        for(var j=0;j<arr.length;j++){
            str+=arr[i][j]+" ";
        }
        console.log(str);
    }
}

