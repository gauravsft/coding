
// 0-1 Knapsack Problem
// Put n items with given weight and value in a knapsack of capacity W to get the maximum total value in the knapsack
var value=[100,50,150];
var wt=[10,20,30];
var n=3;
var W=50;
console.log(knapsack(value,wt,n,W))

function knapsack(value,wt,n,W){
    if(n==0 || W==0){
        return 0;
    }
    if(wt[n-1]>W){
        return knapsack(value,wt,n-1,W);
    }

    return Math.max(knapsack(value,wt,n-1,W-wt[n-1])+value[n-1],knapsack(value,wt,n-1,W));
}