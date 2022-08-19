

//Move all z to end of the string

var str="zxdzfzzjkl";
console.log(removeAllz(str));

function removeAllz(str){
    if(str.length===0){
        return "";
    }
    var ch=str[0];
    var ans=removeAllz(str.substr(1));

    if(ch=="z"){
        return ans + ch;
    }
    return ch+ans;
}