// constant space: values which dont affect space complexity when being declared 
//also O(n) complexity of O(1) for numbers, booleans, null, undefined
//strings have a space complexity of O(n) depending on length, just as Arrays and Objects depending on length and number of keys

function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//space complexity of O(1), only two numbers are being declared, time complexity of O(n)

function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

//space complexity of O(n) because the array grows larger with each iteration and O(n) time Complexity

// Big O of objects 
/*
    insertion O(1)
    removal O(1)
    Searching O(n)
    Access O(1)
*/

let myObject = {
    firstName: "Marcos",
    student: true,
    jobs: [1,2,3,4],
}

console.log(Object.keys(myObject)); // O(n)
console.log(Object.values(myObject)); // O(n)
console.log(Object.entries(myObject)); // O(n)
console.log(myObject.hasOwnProperty("firstName")); // O(1)

