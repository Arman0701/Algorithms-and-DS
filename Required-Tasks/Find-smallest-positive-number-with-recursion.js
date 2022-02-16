"use strict";

// Given an array of numbers. Write a recursive function to find its minimal positive
// element. (if such element does not exist, return -1).

function findMin(numbers) {
    let numbersArr = numbers.filter(elem => {return elem >= 0});
    if (numbersArr.length <= 1){
        if (numbersArr.length === 0){
            return -1;
        }
        return numbersArr[0];
    }
    else if(numbersArr[0]>numbersArr[1]) {
        return findMin(numbersArr.slice(1));
    } else {
        return findMin([numbersArr[0]].concat(numbersArr.slice(2)));
    }
}

console.log(findMin([-5, -9, -111, -1000, -7]));
console.log(findMin([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(findMin([45, -9, 15, 5, -78]));