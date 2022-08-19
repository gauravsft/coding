

//Remove duplicate using recursion
//Remove all duplicates from the string

var str="aaabbbccddeeeeeffffffffff";
console.log(remove(str));

function remove(str){
    if(str.length===0){
        return "";
    }
    var ch=str[0];
    var ans=remove(str.substr(1));

    if(ch==ans[0]){
        return ans;
    }
    return ch+ans;
}