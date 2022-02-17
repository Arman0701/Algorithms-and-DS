'use strict'

// Given an array of numbers which is almost sorted in ascending order. Find and return the index
// where sorting order is violated, else return -1;

function findViolatedIndex(numbers, count) {
    if (numbers.length === 0) return -1;
    if (count === undefined) {
        count = 0;
    } else count += 1;
    if (numbers[0] > numbers[1]){
        return ++count;
    } else if (numbers[0] < numbers[1] || numbers[0] === numbers[1]){
       return findViolatedIndex(numbers.slice(1), count);
    }
    return -1;
}

console.log(findViolatedIndex([2, 12, 15, 48, 64]));
console.log(findViolatedIndex([-9, -4, -4, 3, 12, 4, 5]));