const mynums = [1,2,3]

// const myTotal = mynums.reduce(function (acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc + currval
// }, 3 )

const myTotal = mynums.reduce( (acc, curr) => acc+curr,0 )


console.log(myTotal);

const shopingCart = [
 {
    itemName: "JS course",
    price: 2299,
},
 {
    itemName: "java course",
    price: 5999,
},
 {
    itemName: "cpp course",
    price: 1999,
},
 {
    itemName: "react course",
    price: 12099,
},
]

const priceToPay = shopingCart.reduce( (acc, item) => acc+ item.price, 0)

console.log(priceToPay);
