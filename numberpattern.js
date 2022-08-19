var mat=5;

for(var i=0;i<mat;i++){
    var str='';
    for(var j=0;j<mat-i-1;j++){
        str+=" ";
    
    }
    var val=1;
    for(var k=0;k<=i;k++){
        str+=val+" ";
        val++;
    }
    console.log(str);
}