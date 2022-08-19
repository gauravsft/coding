var mat=5;

for(var i=0;i<mat;i++){
    var str='';
    var val=1;
    for(var j=0;j<mat-i;j++){
        str+=val+" ";
        val++;
    }
    console.log(str);
}