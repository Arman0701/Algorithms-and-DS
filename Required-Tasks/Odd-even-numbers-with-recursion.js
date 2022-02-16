'use strict'

// Write a recursive function to determine whether all digits of the number are odd or not.

function onlyEven(number){
   if (typeof number !== 'string'){
      number = String(number);
   }
   if (number.length !== 0){
      for (let i=0; i<number.length; i++){
         if (number[0] % 2 === 0) return false;
         number = number.slice(1)
         onlyEven(number);
      } 
   }
   return true;
}

console.log(onlyEven(4211133));
console.log(onlyEven(7791));
console.log(onlyEven(5));