'use strict'

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function findGcd(number, result = [], i = 1){
    if (number < i) return result;
    if (number % i === 0){
        result.push(i);
    }
    return findGcd(number, result, i+1);
}

function getMax(arr1, arr2, max = -Infinity){
    if (arr1.length >= arr2.length){
        max = arr1[arr1.length-1]
        if (! arr2.includes(max)){
            arr1.pop();
        } else return max;
    } else {
        max = arr2[arr2.length-1];
        if (! arr1.includes(max)){
            arr2.pop();
        } else return max;
    }
    return getMax(arr1, arr2, max);
}

function gcd(num1, num2){
    let gcdArr1 = findGcd(num1);
    let gcdArr2 = findGcd(num2);
    return getMax(gcdArr1, gcdArr2);
}

console.log(gcd(12, 24));
console.log(gcd(11, 24));
console.log(gcd(12, 25));
console.log(gcd(120, 240));