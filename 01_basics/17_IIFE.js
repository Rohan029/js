// Immediately Invoked Function Expressions (IIFE)
//Global scope k pollution er jonne scope e problm hoy tai IIFE use kori

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();


((name)=>{
    console.log(`DB CONNECTED WITH CODE ${name}`);
    
})('Rohan')