
//Print all posible words from Phone digits
var keypadarr=["","./","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
keypad("23","")

function keypad(s,ans){
    if(s.length==0){
        console.log(ans);
        return;
    }
    var ch=s[0];
    var code=keypadarr[ch-"0"];
    var partOfString=s.substr(1);

    for(var i=0;i<code.length;i++){
        keypad(partOfString,ans+code[i]);
    }

}