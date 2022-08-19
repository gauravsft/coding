
//Print all possible permutations of a string

var str="ABC";
permutation(str,"");

function permutation(str,ans){
    if(str.length==0){
        console.log(ans);
        return;
    }
    for(var i=0;i<str.length;i++){
        var ch=str[i];
        var partOfString=str.substr(0,i)+str.substr(i+1);
        permutation(partOfString,ans+ch);
    }
}