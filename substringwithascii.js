

// Generate substrings with ASCII number

var str="AB";
substring(str,"");

function substring(str,ans){
    if(str.length==0){
        console.log(ans);
        return;
    }
    var ch=str[0];
    var code=ch.charCodeAt();
    var partOfString=str.substr(1);
    substring(partOfString,ans);
    substring(partOfString,ans+ch);
    substring(partOfString,ans+ code);
}