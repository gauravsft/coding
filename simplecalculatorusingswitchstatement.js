var a=5;
var b=10;
var op="/";

switch (op) {
    case "+":
        console.log(a+b);
        break;

    case "-":
        console.log(a-b);
        break;

    case "*":
        console.log(a*b);
        break;

    case "/":
        console.log(a/b);
        break;

    case "%":
        console.log((a+b)/2);
        break;


    default:
        console.log("Wrong Input Operator");
        console.log("Plese type again");
        break;
}