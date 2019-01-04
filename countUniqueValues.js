const process = require("process");
const assert = require("assert");

const start = process.hrtime()

//colts version
// const countUniqueValues = arr => {
    //     if(arr.length === 0) return 0;
    //     let i = 0;
    //     for(let j = 1; j < arr.length; j++) {
//         if(arr[i] !== arr[j]) {
    //             i++;
    //             arr[i] = arr[j];
    //         }
    //     }
    //     return i + 1;
    // }
    
// my version
    const countUniqueValues = arr => {
    if(arr.length === 0) {
        return 0;
    }
    let left = 0, right = 1;
    while(right < arr.length) {
        if(arr[left] === arr[right]) {
            right++;
        } else {
            left++;
            arr[left] = arr[right];
            right++;
        }
    } 
    return left+1;
}

const end = process.hrtime(start);
console.info("The process lasted from %dns to %dns ", end[0], end[1]/100000);
console.log(countUniqueValues([-2,-1,0,0,0,1,1,1,2,3,3,3,3,4,4,4,4,4,5]));

assert(countUniqueValues([1,1,1,1,1,2]) === 2)
assert(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) === 7)
assert(countUniqueValues([]) === 0)
assert(countUniqueValues([-2,-1,-1,0,1]) === 4)