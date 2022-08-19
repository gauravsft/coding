
// Count the number of paths possible in a maze
var n=9;

console.log(countWayMaze(n,0,0))   //i and j start at index 0.

function countWayMaze(n,i,j){
    if(i==n-1 && j==n-1){
        return 1;
    }
    if(i>=n ||j>=n){
        return 0;
    }
    return countWayMaze(n,i+1,j)+countWayMaze(n,i,j+1);
}