'use strict'

// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result.

function sumDigits(value, sum = 0){
    if (! Array.isArray(value)) value = value.toString().split('').map(elem => +elem);
    if (! value.length) {
        if (sum.toString().length === 1 && sum !== 0) return sum;
        return sumDigits(sum);
    }
    sum += value.pop();
    return sumDigits(value, sum);
}

console.log(sumDigits(14));
console.log(sumDigits(29));
console.log(sumDigits(999999999999));