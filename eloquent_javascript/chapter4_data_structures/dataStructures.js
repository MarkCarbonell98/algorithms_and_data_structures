const {inspect} = require('util')

function range(start = 0, end = 10, step = 1) {
    const result = []

    for (let i = start; (start < end && i <= end) || (start > end && step < 0 && i >= end); i += step) {
        result.push(i)
    }
    return result
}

function sum(arr) {
    return arr[0] ? arr[0] + sum(arr.slice(1)) : 0;
}

function reverseArray(arr) {
    const newArr = []
    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr
}

function reverseArrayInPlace(arr) {
    const length = arr.length -1 
    for(let i = 0; i < Math.floor(arr.length/2); i++) {
        const endIndex = length-i
        temp = arr[i]
        arr[i] = arr[endIndex]
        arr[endIndex] = temp
    }
    return arr
}

console.time("Normal")
console.log(reverseArray([1,2,3,4]))
console.timeEnd("Normal")

console.time("In place")
console.log(reverseArrayInPlace([1,2,3,4]))
console.timeEnd("In place")

const list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}

function createList(length) {
    let list = null;
    for(let i = 0; i < length; i++) {
        list = {value: i, rest: list}
    }
    return list
}


function listToArray(list) {
    const result = []
    for(let i = list; i != null; i = i.rest) {
        result.push(i.value)
    }
    return result
}
console.log(inspect(createList(4), {showHidden: true, colors: true, depth: null}))

// console.log(inspect(prepend(prepend(prepend(testList, 2), 1), 3), {showHidden: true, colors: true, depth: null}))

function nth(list, index) {
    if(index <= 0) return list.value
    if(!list.rest && index !== 0) return undefined
    return nth(list.rest, index-1) 
}

console.log(nth(list, 2))

function prepend(list, element) {
    return {value: element, rest: list}
}

console.log(listToArray(list))




// console.log(range())
// console.log(range(1,10,2))
// console.log(sum(range(1,10,2)))
// console.log(range(5,2,-1))

// two numbers
// one number and a string
// two arrays
// two null
//two undefined
// 

function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}
const obj1 = {here: {an: 'hello'}, object: [1,2,3]}
const obj2 = {here: {an: 'hello'}, object: [1,2,3]}
console.log(deepEqual(1,1))