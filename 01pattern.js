var mat=5;

for(var i=0;i<mat;i++){
    var str='';
    for(var j=0;j<=i;j++){
        if((i+j)%2===0){
            str+=1+" ";
        }
        else{
            str+=0+" ";
        }
    }
    console.log(str);
}