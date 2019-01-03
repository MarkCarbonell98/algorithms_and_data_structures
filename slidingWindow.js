const assert = require("assert");
const process = require("process");

const maxSubarraySum = (arr,int) => {
    let i = 0, j = 1, results = [], temp = 0;
    while(j < arr.length) {
        if(int - 1 === j) {
            results.push(arr[i]);
            i++;
        }
        arr[i] += arr[j];
        console.log(temp, arr[i], i);
        j++;
    }
    console.log(results);
    return Math.max(...results);
}

console.log(maxSubarraySum([1,2,3,4,4,4,4,5,5,5,1], 4));