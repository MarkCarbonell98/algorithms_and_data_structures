const assert = require("assert");
const process = require("process");

/**
 * this process consists in finding a subset of data into an array that must be added together as a result. You dont loop through the array twice but
 * you rather add the first subset of data together, and substract the last element of data subset and add the next one after the subset after each iteration. 
 */

//colts solution
// const maxSubarraySum = (arr,num) => {
//     let maxSum = 0;
//     let tempSum = 0;
//     if(arr.length < num) return null;
//     for(let i = 0; i < num; i++) {
//         maxSum += arr[i];
//     }

//     tempSum = maxSum;
//     for(let i = num; i<arr.length; i++) {
//         tempSum = tempSum - arr[i - num] + arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     return maxSum;
// }
const start = process.hrtime();

const maxSubarraySum = (arr, limit) => {
    let temp = 0, total = 0;
    if(limit > arr.length) return null;
    for(let i = 0; i < limit; i++) {
        temp += arr[i];
    }

    total = temp;

    for(let i = limit; i < arr.length; i++) {
        temp = temp - arr[i - limit] + arr[i];
        total = Math.max(total, temp);
    }
    return total;
}

const end = process.hrtime(start);
console.log("The time it took was %dms", end[1]/1000000);


console.log(maxSubarraySum([1,2,3,4,4,4,4,5,5,5,1], 4));