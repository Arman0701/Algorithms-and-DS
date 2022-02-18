"use strict";

// Given an array of nested arrays. Write a recursive function that flattens it.
// Hint: Create function that concats arrays.

function flatten(arr) {
    const newArr = arr.reduce((acc, item) => {
        if (Array.isArray(item)) {
            acc = acc.concat(flatten(item));
        } else acc.push(item);
        return acc;
    }, []);
    return newArr;
}

console.log(flatten([1, [3, 4, [1, 2]], 10]));
console.log(flatten([14, [1, [[[3, []]], 1], 0]]));