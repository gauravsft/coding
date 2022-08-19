var x=3;
var y=9;
var z=5;

if(check(x,y,z)){
    console.log("Pythagorian triplet");
}
else{
    console.log("not a pythagorian triplet");
}

function check(x,y,z){
    var a=Math.max(x,Math.max(y,z));
    var b;
    var c;
    if(a==x){
        b=y;
        c=z;
    }
    else if(a==y){
        b=x;
        c=z;
    }
    else{
        b=x;
        c=y;
    }

    if(a*a==b*b+c*c){
        return true;
    }
    else{
        return false;
    }
}