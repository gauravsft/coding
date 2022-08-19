var mat=5;

for(var i=1;i<=mat;i++){
    var str='';
    for(var j=1;j<=mat-i;j++){
        str+="  ";
    
    }
    var val=i;
    for(var k=1;k<=i;k++){
        str+=val+" ";
        val--;
    }
    var val2=2;
    for(var k=1;k<=i-1;k++){
        str+=val2+" ";
        val2++;
    }
    console.log(str);
}