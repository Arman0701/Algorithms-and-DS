'use strict'

// Given an array and a number N. Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift());

function reverse(arr, i, loop = 0){
    if (Math.abs(i) <= loop) return arr;
    if (i < 0) {
        arr.unshift(arr.pop());
        return reverse(arr, i, ++loop);
    } else {
        arr.push(arr.shift());
        return reverse(arr, i, ++loop);
    }
}

console.log(reverse(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(reverse(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));