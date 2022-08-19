
var s = "-+7*45+20";
console.log(prefix(s));

function prefix(s) {
    var st = [];
    for (var i = s.length - 1; i >= 0; i--) {
        if (s[i] >= '0' && s[i] <= '9') {
            st.push(s[i] - '0');
        }
        else {
            var op1 = st[st.length-1];
            st.pop();
            var op2 = st[st.length-1];
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