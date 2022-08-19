

// Generate all substrings of a string

var str="ABC";
substring(str,"");

function substring(str,ans){
    if(str.length==0){
        console.log(ans);
        return;
    }
    var ch=str[0];
    var partOfString=str.substr(1);
    substring(partOfString,ans);
    substring(partOfString,ans+ch);
}