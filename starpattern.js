var mat=5;

for(var i=1;i<=mat;i++){
    var str='';
    for(var j=1;j<=mat-i;j++){
        str+="  ";
    
    }
    for(var k=1;k<=i;k++){
        str+="*"+" ";
    }
    for(var k=1;k<=i-1;k++){
        str+="*"+" ";
    }
    console.log(str);
}
for(var i=mat;i>=1;i--){
    var str='';
    for(var j=1;j<=mat-i;j++){
        str+="  ";
    
    }
    for(var k=1;k<=i;k++){
        str+="*"+" ";
    }
    for(var k=1;k<=i-1;k++){
        str+="*"+" ";
    }
    console.log(str);
}