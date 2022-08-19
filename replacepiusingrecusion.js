// pi ke jagah pe replace karenge 3.14 se

var re="pixxppxppijkpihpi";
//function call
console.log(replace(re));

function replace(re){
    if(re.length===0 || re.length==1){
        return re;
    }
    if(re[0]=="p" && re[1]=="i"){
        return "3.14" + replace(re.substr(2));   
    }
    else{
        return re[0] + replace(re.substr(1));
    }
}