// let a = 2

// if(true)
// {
// let a = 10
// // console.log("INNER : ", a);
// }

// console.log("OUTER : ", a);

function one() {
    const username = "Rohan"
    
    function two () {
        const website = "YT"
         console.log(username);
        
    }
    // console.log(website);
    
    two()
    
}

// one()

if (true){
    const username = "Rohan"
    if(username === "Rohan"){
        const website = "YT"
        // console.log(username + website);
        
    }
    // console.log(website);
    // console.log(username);
}

// console.log(username);

//++++++++++++++++++++++ interesting ++++++++++++++++++


console.log(addOne(5));

function addOne(num) {
    return num +1
    
}

// addOne(5)

// addTwo(4)// error asbe becos amra ekta variable er moddhe dia chi

const addTwo = function (num) {
    return num+2
}
// addTwo(4)

































































