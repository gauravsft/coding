
function prec(s){
    if(s=='^'){
        return 3;
    }
    else if(s=='*' || s=='/'){
        return 2;
    }
    else if(s=='+' || s=='-'){
        return 1;
    }
    else{
        return -1;
    }
}

function infixToPostfix(s){
    var st=[];
    var op="";

    for(var i=0;i<s.length;i++){
        if((s[i]>='a' && s[i]<='z') && (s[i]>='A' && s[i]<='Z') ){
            op+=s[i];
        }
        else if(s[i]=='('){
            st.push(s[i]);
        }
        else if(s[i]==')'){
            while(!(st[st.length-1]==-1) && st[st.length-1]!='('){
                op+= st[st.length-1];
                st.pop();
            }
            if(!(st[st.length-1]==-1)){
                st.pop();
            }
        }
        else{
            while(!(st[st.length-1]==-1) && (prec(st[st.length-1])>prec(s[i]))){
                op+= st[st.length-1];
                st.pop();
            }
            st.push(s[i]);
        }
    }
    while(!(st[st.length-1]==-1)){
        op+= st[st.length-1];
        st.pop();
    }
    return op;
}

var str="(a-b/c)*(a/k-l)";
console.log(infixToPostfix(str));