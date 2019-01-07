function reverse(str) {
    return str.length === 1 ? str[0] : str[str.length-1] + reverse(str.slice(0, str.length-1));
}

console.log(reverse("amo mi puta vida"));

function isPalindrome(str) {
    return str === reverse(str);
}

console.log(isPalindrome('tacocat'));

function someRecursive(arr, fn) {
    return fn(arr[arr.length-1]) ? true : arr.length <= 1 ? false : someRecursive(arr.slice(0,arr.length-1), fn); 
}

function someRecursive2(arr,fn) {
    return fn(arr[0]) ? true : arr.length <= 1 ? false : someRecursive2(arr.slice(1), fn);
}

const isOdd = val => val % 2 !== 0;
console.log(someRecursive2([2, 2,4], isOdd));

let arr = [[[[1]], [2]], [3]];
for(let value of arr) {
    console.log(value[0]);
}

// function flatten(arr) {
//    return [].concat.apply([], arr);
// }

function hasArraysInside(arr) {
    return Array.isArray(arr[0]) ? true : arr.length <= 1 ? false : hasArraysInside(arr.slice(1));
}

function flatten(arr) {
    return hasArraysInside(arr) ? flatten([].concat.apply([], arr)) : arr;
}
console.log(flatten([[1], [2,3], [[[4]]]]));
// console.log(flatten([ 1, 2, 3, [ [ 4 ] ] ]));

//colts solutions 
function reverse(str) {
    return str.length <= 1 ? str : reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
    return str.length === 1 ? true : str.length === 2 ? str[0] === str[1] : str[0] === str.slice(-1) ? isPalindrome(str.slice(1,-1)) : false; 
}

function someRecursive(arr, fn) {
    return arr.length === 0 ? true : fn(arr[0]) ? true : someRecursive(arr.slice(1), fn);
}

function flatten(oldArr) {
    let newArr = [];
    for(let i = 0; i < oldArr.length; i++) {
        if(Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]));
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}






