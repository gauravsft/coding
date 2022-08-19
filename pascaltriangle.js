var n=5;

for(var i=0;i<n;i++){
    var str="";
    for(var j=0;j<=i;j++){
        str+=factorial(i)/(factorial(j)*factorial(i-j)) + " ";
    }
    console.log(str);
}

function factorial(n){
    var fact=1;
    for(var i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}