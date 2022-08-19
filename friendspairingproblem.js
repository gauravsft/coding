

// Find the number of ways in which n friends can remain single or can be paired up

var n=4;
console.log(pairingWay(n));

function pairingWay(n){

    if(n===0 || n==1 || n==2){
        return n;
    }

    return pairingWay(n-1) + pairingWay(n-2) * (n-1)
}