//Quicksort and Merge-sort

//start the search from the middle of the array going in both directions after each iteration. Double as efficient as usual search

const process = require("process");



//version 1
const start1 = process.hrtime();

const search2 = (arr, number) => {
    for(let i = 0; i < arr.length; i++) {
        if(number === arr[i]) return i;
    }
    return -1;
}

console.log(search2([1,2,3,4,5,6,7,7,8], 6));
const end1 = process.hrtime(start1);
console.log("The algorithms search2 ex. time was %dms", end1[1]/1000000);


//version 2
const start = process.hrtime();

const search = (arr, number) => {
    return arr.indexOf(number);
}

console.log(search([1,2,3,4,5,6,7,7,8], 6));
const end = process.hrtime(start);
console.log("The algorithms ex. time was %dms", end[1]/1000000);


//version 2
const start2 = process.hrtime();

// const binarySearch = (arr, number) => {
//     let min = 0, max = arr.length - 1;
//     while(min <= max) {
//         let middle = Math.floor((max + min) /2);
//         let currentElement = arr[middle];
//         if(currentElement < number) {
//             min = middle + 1;
//         } else if(currentElement > number) {
//             max = middle - 1;
//         } else {
//             return middle;
//         }
//     }
//     return -1;
// }

const binarySearch = (arr, number) => {
    let minimum = 0, maximum = arr.length -1;
    while(minimum <= maximum) {
        let middle = Math.floor((maximum + minimum)/2);
        if(arr[middle] > number) {
            maximum = middle -1;
        } else if(arr[middle] < number) {
            minimum = middle + 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,7,8], 6));
const end2 = process.hrtime(start2);
console.log("The algorithms ex. time was %dms", end2[1]/1000000);