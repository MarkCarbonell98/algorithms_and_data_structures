const process = require("process");

/**
 * 1)understand the problem
 * 2)explore examples
 * 3)break it down
 * 4)solve/simplify
 * 5)refactor
 * 
 * //book of George Polya
 * better problem solving skills
 */

//common problems: frequency counters, multiple pointers, sliding window, divide and conquer, dynamic programming, greedy algorithms, backtracking


// ------------------------------------------understanding the problem
/**
 * Restate the problem in your own words,
 * What are the inputs
 * what are the outputs
 * Do I have enough information to solve the problem ?
 * Naming the pieces of data that constitute the problem
 */

//example: func that takes to num and returns sum

//restate the problem: function that adds two numbers,

//What are the inputs ? Numbers, ints ?, floats ? strings for large numbers ?

//What are the outputs ? Numbers ints ?, floats ? strings for large numbers ?

//Do I have enough information ? Are not-planned inputs involved ? add only one number ? throw an error if only one arg is passed.

// 1) function declaration, 2) function arguments (numbers), 3) add both numbers, 4) return the sum



// ------------------------------------------exploring examples
/**
 * Start with simple ones
 * move on with more complex examples
 * explore empty inputs
 * explore invalid inputs
 */

// example: write a function that counts all characters of a string and returns them as an object ***

// lowercase, uppercase characters ?
// spaces, slashes, special chars ?
//have all letters be returned from the object ?
// important to think about inputs

//Break it down (writing pseudocode), and communicate your procedure

//account for numbers, and lowercased chars



// ------------------------------------------Solve and simplify

//if you get stuck you should solve a simpler problem.
/**
 * find the difficulty in what you're trying to do
 * ignore if for the moment and focus on solving what you know,
 * write a simple solution (not performing!)
 * incorporate difficulty
 * 
 */
console.time('first function runs')
const charCount = str => {
    //make object to return,
    let result = {};
    //loop over string
    for(let i = 0; i < str.length; i++) {
        // is char a number/letter && a key ? add one to count,
        let char = str[i].toLowerCase();
        if(result[char]){
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
        // is char a number/letter && not a key ? add key, and set value to 1
        // is char invalid ? dont do anything
    //get magic unicorn hair
    //return object at the end
}
console.log(charCount("Marcos is gay"), '\n');
console.timeEnd('first function runs');


// let hrstart = process.hrtime();
// setTimeout(function() {
//     let hrend = process.hrtime(hrstart);
//     console.log("the time was of %dms seconds and %dns nanoseconds", hrend[0], hrend[1]/1000000);
// }, 1000)

//refactoring questions: 
/**
 * can i check the result ?
 * can i get to the result in a different way ?
 * can you understand it all ?
 * can you use the result for another problem ?
 * can you make the solution more performing ?
 * other ways of refactoring ?
 * How have other people solved this ?
 */

// console.time("second function timer");
const charCountImproved = str => {
    let obj = {};
    for(let i  = 0; i < str.length; i++) {
        if(/[a-z0-9]/.test(str[i])) {
            str[i].toLowerCase();
            obj[str[i]] = ++obj[str[i]] || 1;
        }
    }
    return obj;
} 
// console.log(charCountImproved("Marcos es Marico"), '\n');
// console.timeEnd("second function timer");




console.time("last improved function");
const charCountImprovedImproved = str => {
    let obj = {};
    // str.toLowerCase();
    for(let char of str) {
        if(/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log(charCountImprovedImproved("Marcos es Marico"), "\n");
console.timeEnd("last improved function");

console.time("final improved function");
const charCountImprovedImprovedFinal = str => {
    let obj = {};
    for(let char of str) {
        if(isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = obj[char]++ || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {
                return false;
            }
    return true;
}
console.log(charCountImprovedImprovedFinal("Marcos es Marico"));
console.timeEnd("final improved function");





