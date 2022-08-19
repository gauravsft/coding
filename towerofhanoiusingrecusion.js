// Tower og Hanoi

var n=3;
var source="A";       //jaha pe hai 
var destination="C";  // jaha jana hai
var helper="B";       // jo jane me madad karega

toh(n,source,destination,helper);

function toh(n,source,destination,helper){
    if(n==0){
        return ; //base case
    }
    toh(n-1,source,helper,destination);                        //as a  helper act destination karega 
    console.log("Move from "+ source + " to " + destination);
    toh(n-1,helper,destination,source)                         //as a  helper act source karega 
}