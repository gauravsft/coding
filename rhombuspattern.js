var mat=5;

for(var i=0;i<mat;i++){
    var str='';
    for(var j=0;j<mat-i-1;j++){
        str+="  ";
    
    }
    for(var k=0;k<mat;k++){
        str+="*"+" ";
    }
    console.log(str);
}