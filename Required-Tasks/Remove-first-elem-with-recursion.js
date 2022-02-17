'use strict'

// Given an array. Write a recursive function that removes the first element and returns the
// given array. (without using arr.shift())

function removeFirst(array, result){
    if (! result) result = [];
    if (! array.length) return [];
    else if (array.length > 1) {
        result.unshift(array.pop());
        return removeFirst(array, result);
    } else return result;
}


console.log(removeFirst([6, 78, 'n', 0, 1]));
console.log(removeFirst([5]));
console.log(removeFirst([]));