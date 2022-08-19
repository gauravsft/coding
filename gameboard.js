

//Count the number of paths possible from start point to end point in gameboard
// 0  1  2  3
console.log(countWay(0,3));
function countWay(start,end){
    if(start==end){
        return 1;
    }
    if(start>end){
        return 0;
    }
    var count=0;
    for(var i=1;i<=6;i++){
        count+=countWay(start+i,end);
    }
    return count;
}