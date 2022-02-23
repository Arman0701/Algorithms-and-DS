'use strict'

// Binary search implementation.
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5'

const array1 = [ 0,1,2,3,4,5,6,11,15,18,21 ];
Array.prototype.binarySearch = function binarySearch(number, arr){
    if (arr === undefined) arr = this;
    let mid = Math.floor(this.length / 2);
    if (this[mid] > number){
        return this.slice(mid).binarySearch(number, arr);
    } else if (this[mid] < number){
        return this.slice(0, mid).binarySearch(number, arr);   
    } else {
        return arr.indexOf(number);
    }
}

console.log(array1.binarySearch(15));