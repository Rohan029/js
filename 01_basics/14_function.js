

function sayMyName() {
console.log("R");
console.log("0");
console.log("H");
console.log("A");
console.log("N");
}

//sayMyName()

//   function addingTwoNum (num1, num2)
//   {
//        console.log(num1 + num2);
        
//   }


function addingTwoNum (num1, num2)
  {
     //   let result = num1 + num2
     //   console.log("Rohan"); //print hobe
       
     //   return result
     //    console.log("Rohan"); return er por kichu print hoy na
      return num1 + num2  


  }

  const result = addingTwoNum(5,5)

//   console.log("Result: ",result);
  
function loginUserMessage(username = "Sam"){
if(username===undefined)
{
     console.log(`Please enter a username`);
     return
}

return`${username} just logged in`
}

// console.log(loginUserMessage("Rohan"))
// console.log(loginUserMessage("Rohan"))

function calculateCartPrice(...num1){
return num1
}

// console.log(calculateCartPrice(200, 400 ,600));

const user = {
     username: "Rohan",
     price: 199
}

function handleObject(anyobj){
console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);

}

// console.log(handleObject(user))
handleObject({
    username : "Sam",
    price:199
})



const myNewArray = [200,400, 600, 100]

function returnSecondValue (secondValue){
     return secondValue[1]

}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200,300,400,500]))

