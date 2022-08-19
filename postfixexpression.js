

var s = "46+2/5*7+";
console.log(postfix(s));

function postfix(s) {
    var st = [];
    for (var i =0; i<s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            st.push(s[i] - '0');
        }
        else {
            var op2 = st[st.length-1];
            st.pop();
            var op1
             = st[st.length-1];
            st.pop();

            switch (s[i]) {
                case '+':
                    st.push(op1 + op2);
                    break;

                case '-':
                    st.push(op1 - op2);
                    break;

                case '*':
                    st.push(op1 * op2);
                    break;

                case '/':
                    st.push(op1 / op2);
                    break;

                case '^':
                    st.push(pow(op1,op2));
                    break;

            }
        }
    }
    return st[st.length-1];
}