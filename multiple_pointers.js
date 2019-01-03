// algorithms that create pointers or values that correspond to an index position,
//move to begginning or end depending on a condition

//very efficient for solving problems with no space complexity
//useful for finding pairs of objects in arrays
//define a while loop that will run until the left head of the array added to the second head (located on arr.length -1) returns 0.
//After each iteration if right is left is smaller than right + 1 then we remove 1 from the right, else we add one to the left

const process = require("process");

const start = process.hrtime()

const sumZero = arr => {
    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] + arr[arr.length - i - 1] === 0) {
    //         return [arr[i], arr[arr.length - i - 1]]
    //     } 
    // }
    // return undefined;
    let left = 0; right = arr.length -1;
    while(left < right) {
        // if(arr[left] + arr[right] === 0) {
        //     return [arr[left], arr[right]];
        // }
        // if(arr[left] + arr[right] > 0) {
        //     left++;
        // } else {
        //     right--;
        // }

        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    return undefined;
}

const end = process.hrtime(start);
console.info("The process lasted from %dns to %dns ", end[0], end[1]/100000);
console.log(sumZero([-4, -3, -2, -1, 0, 10,6,5,10]));



const start1 = process.hrtime()

const sumZero2 = arr => {
    let left = 0, right = arr.length-1, sum;
    while(left < right) {
        sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
        // if(sum === 0) {
        //     return [arr[left], arr[right]];
        // } else if(sum > 0) {
        //     right--;
        // } else {
        //     left++;
        // }
    }
    return undefined;
}

const end1 = process.hrtime(start);
console.info("The process lasted from %dns to %dns ", end1[0], end1[1]/100000);
console.log(sumZero2([-4,-2,-1,0,1,32,3]));
