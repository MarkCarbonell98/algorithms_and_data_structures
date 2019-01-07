// 10 9 8 7

function substract(number) {
    console.log(number);
    return number <= 1 ? "All done!" : substract(number -1); 
}

// result(10);
// console.log(substract(10));

//base case = number <= 10

function addRange(number) {
    console.log(number);
    return number === 1 ? 1 : number + addRange(number - 1);
}

// console.log(addRange(10));

//factorial 

function factorial(number) {
    return number === 1 ? 1 : number * factorial(number -1);
}

console.log(factorial(4));

//errors generate a stack overflow!

// helper recursive functions
function collectOddValues(arr) {
    let result = [];
    function helper(helperInput) {
        if(helperInput.length === 0) {
            return;
        } 
        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));

function collectOddValuesPure(arr) {
    let result = [];
    if(arr.length === 0) return arr;
    if(arr[0] % 2 !== 0) {
        result.push(arr[0]);
    }
    
    result = result.concat(collectOddValues(arr.slice(1)));
    return result;
} 

console.log(collectOddValuesPure([1,2,3,4,5,6,7,8,9]));

function power(base, exp) {
    return exp === 0 ? 1 : base*power(base, exp -1);
}

console.log(power(2,4));

function factorial(number) {
    return number === 0 ? 1 : number * factorial(number-1);
}

console.log(factorial(10));



function productOfArray(arr) {
    return arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3]));

function recursiveRange(number) {
    return number === 0 ? 0 : recursiveRange(number -1) + number;
}

console.log(recursiveRange(10));

// number = 3;
// 1+ 0 = 1;
// 1 + 1 = 2;
// 1 + 2 = 3;
// 2 + 3 = 5;

function fib(number) {
    return number <= 2 ? 1 : fib(number-2)+fib(number-1);
}

// function fib(number) {
//     if(number === 1 || number === 2) {
//         return 1;
//     } else if(number > 1) {
//         return fib(number - 2) + fib(number-1);
//     }
// }

console.log(fib(10));



//3 3 == 3*3*3
//3 * 4 

// [1,2,3] ==> 1*2*3 ==> 6;

// arr ==> arr.slice(1)[0] * arr.slice(1)[0] * arr.slice(1)[0]




//pure recursion
