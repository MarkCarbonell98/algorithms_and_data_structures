/**
 * linear search algs. include indexOf, includes, find, findIndex
 */

function mySuperIndexOf(arr,item) {
    for(let i = 0; i < arr.length; i++)
        if(arr[i] === item) return i;

    return -1;
}

let testArr = [1,2,34,5,56,6,6243,2,345,234,5,2345,23,54,2435,6];

console.log(mySuperIndexOf(testArr, 6));

//binary search
function binarySearch(arr, item) {
    let left = 0, right = arr.length-1;
    while(left <= right) {
        let middle = Math.floor((left + right)/2);
        if(item > arr[middle]) {
            left = middle +1;
        } else if(item < arr[middle]) {
            right = middle-1;
        } else {
            return middle;
        }
    } 
    return -1;
}

let testArr2 = [1,2,3,4,5];
console.log(binarySearch(testArr2, 2));

function naiveStringSearch(str, substring) {
    let count = 0;
    for(let i = 0; i < str.length;i++) {
        if(str.substr(i, substring.length) === substring) {
            count++;
        }
    }
    return count;
}

console.log(naiveStringSearch('oajksdjf;asdfomga;sdjfomgomg', 'omg'));

