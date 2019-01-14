//same frequency using frequency counter pattern

const assert = require("assert");

function sameFrequency(first, second) {
    let firstString = ('' + first);
    let secondString = ('' + second);
    if(firstString.length !== secondString.length) return false;

    let frequencies1 = {}, frequencies2 = {};

    for(let char of firstString) {
        frequencies1[char] = ++frequencies1[char] || 1;
    }

    for(let char of secondString) {
        frequencies2[char] = ++frequencies2[char] || 1;
    }

    for(let key in frequencies1) {
        if(frequencies1[key] !== frequencies2[key]) {
            return false;
        }
    }
    return true;
}

/**
 * x++;
++x;
The difference comes when you use the value of the expression elsewhere. For example:

x = 0;
y = array[x++]; // This will get array[0]

x = 0;
y = array[++x]; // This will get array[1]
 */

console.log(sameFrequency([1,2,3,4,5,5,5],[5,5,5,1,2,3,4]));

//frequency counters
function areThereDuplicates() {
    let results = {};
    for(let arg in arguments) {
        results[arg] = ++results[arg] || 1;
        if(results[arg] > 1) {
            return false;
        }
    }
    return true;
}

console.log(areThereDuplicates('a', 'b','c', 'd',1, 'a'));

//multiple pointers
function areThereDuplicatesWithPointers(...args) {
    args.sort((a,b) => a > b);
    let i = 0;
    let j = 1;
    while (j < args.length) {
        if(args[i] === args[j]) {
            return true;
        }

        i++;
        j++;
    }
    return true;
}

console.log(areThereDuplicatesWithPointers('a', 'b','c', 'd',1, 'a'));


//the ONE LINERRRRRR
function areThereDuplicatesOneLiner() {
    return new Set(arguments).size === arguments.length;
}

console.log(areThereDuplicatesOneLiner('a', 'b','c', 'd', 1, 'a'));

//multiple pointers

function averagePair(arr, avg) {
    if(arr.length === 0) return false;
    let i = 0, j = 1;
    while(j < arr.length) {
        if((arr[i] + arr[j])/2 === avg) return true;
        j++;
        if(j === arr.length - 1) {
            i++;
            j = i + 1;
        }
    }
    return false;
}


assert(averagePair([1,2,3], 2.5) === true)
assert(averagePair([1,3,3,5,6,7,10,12,19], 8) === true)
assert(averagePair([-1,0,3,4,5,6], 4.1) === false)
assert(averagePair([], 4) === false)

//my solution
// function isSubsequence(first, second) {
//     let secondLocation = 0;
//     for(let i = 0; i < first.length; i++) {
//         let location = second.indexOf(first[i]);
//         if(i > 0) {
//             secondLocation = second.indexOf(first[i-1]);
//         }
//         if(location < secondLocation) return false;
//     }
//     return true;
// }

// colts solution 
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }

//colts solution recursive;
function isSubsequence(first, second) {
    if(first.length === 0) return true;
    if(second.length === 0) return false;
    if(second[0] === first[0]) return isSubsequence(first.slice(1), second.slice(1));
    return isSubsequence(first, second.slice(1));
}

assert(isSubsequence("hello", "hello world") === true);
assert(isSubsequence("sing", "sting") === true);
assert(isSubsequence("abc", "abracadabra") === true);
assert(isSubsequence("abc", "acb") === false);
assert(isSubsequence("ab", "ba") === false);

function maxSubarraySum(arr, number) {
    let temp = 0, total = 0;
    if(number > arr.length) return null;
    for(let i = 0; i < number; i++)
        temp += arr[i];

    total = temp;

    for(let i = number; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i-number];
        total = Math.max(temp, total);
    }
    return total;
}


function minSubArrayLen(arr, limit) {
    //create vars, one equals infinity
    let total = 0, start = 0, end = 0, minLen = Infinity;
    //if the start is greater than the array length 
    while(start < arr.length) {
        //and total, or end are smaller than the sum you should achieve
        if(total < limit && end < arr.length) {
            // add the numbers to total starting with 0 end
            total += arr[end];
            //increase end by one
            end++;
            //if total is greater or equal to the sum you should achieve
        } else if(total >= limit) {
            //filter new min length using Math.min, the length is between the end and the start of the string
            minLen = Math.min(minLen, end - start);
            //rest from total if its greater than the limit
            total -= arr[start];
            // add to start
            start++;
        } else {
            break;
        }
    }
    //we return the minlen 0 if its infinity (meaning there are no subarrays) or minLen; 
    return minLen === Infinity ? 0 : minLen;
} 

console.log(minSubArrayLen([2,3,1,2,4,2,3,1,4,3], 7));

function findLongestSubstring(str) {
    let long = 0, checked = {}, start = 0;
    for(let i = 0; i <str.length;i++) {
        //if the char exists
        if(checked[str[i]]) {
            // we declare the value of start to be the biggest one between start and the values we already iterated through
            start = Math.max(start, checked[str[i]]);
        }
        //after each iteration, declare that long is equal to long or to the index minus the start + 1;
        long = Math.max(long, i - start + 1);
        //we increase our checked account by one
        checked[str[i]] = i + 1; 
    }
    //return long
    return long;
} 

console.log(findLongestSubstring('asdfasdfasdfasdf'));