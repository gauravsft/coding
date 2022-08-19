

// Reverse a string using recursion.

var s="Gulshan";
console.log(reverse(s));


function reverse(name){
    if(name.length===0){
        return name;
    }
    return reverse(name.substr(1)) + name[0]; 
}

