
var n=5;
var arr=[[1,0,1,0,1],[1,1,1,1,1],[0,1,0,1,0],[[1,0,0,1,1]],[1,1,1,0,1]]
var solArr=new Array(n);
for(var i=0;i<n;i++){
    solArr[i]=new Array(n);
    for(var j=0;j<n;j++){
        solArr[i][j]==0;
    }
}

if(ratInMaze(arr,0,0,n,solArr)){
    for(var i=0;i<n;i++){
        var str="";
        for(var j=0;j<n;j++){
            str+=solArr[i][j]+" ";
        }
        console.log(str)
    }
}
else {
    console.log("ER. GAURAV KUMAR")
}

function isSafe(arr,x,y,n){
    if(x<n && y<n && arr[x][y]==1){
        return true;
    }
    return false;
}

function ratInMaze(arr,x,y,n,solArr){

    if((x==(n-1)) && (y==(n-1))){
        solArr[x][y]==1;
        return true;
    }
    if(isSafe(arr,x,y,n)){
        solArr[x][y]==1;
        if(ratInMaze(arr,x+1,y,n,solArr)){
            return true;
        }
        if(ratInMaze(arr,x,y+1,n,solArr)){
            return true;
        }
        solArr[x][y]=0;    // backtracking
        return false;

    }
    
}