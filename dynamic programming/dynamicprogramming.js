
//fibonacci
// fib 1 is 1;
// fib(2) = 1

//can be improved through fib. numbers

const fib = num => {
    return num <= 2 ? 1 : fib(num-1) + fib(num-2);
}

//O(n) = 2^n, very very large

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

//SOLUTION : MEMOIZATION

const fibWithSteroids = (n, memo= [undefined,1,1]) => {
    if(memo[n] !== undefined) return memo[n];
    let res = fibWithSteroids(n-1, memo) + fibWithSteroids(n-2, memo); //variable to store the result
    memo[n] = res; //declare new memory index for this number;
    console.log(memo,n);
    return res;
}

// function fibDef(n, memo = [undefined,1,1])
// {
//     if(memo[n] !== undefined) return memo[n];
//     let res = fib(n-1, memo) + 
// }

const fibWithSteroidsMyOwnVersion = (n, known = []) => {
    return known[n] !== undefined ? known[n] : n <= 2 ? 1 : (known[n] = fibWithSteroidsMyOwnVersion(n-1, known) + fibWithSteroidsMyOwnVersion(n-2, known, known));
}

const memotecnic = (n, last = []) => {
    return last[n] !== undefined ? last[n] : n <= 2 ? 1 : (last[n] = memotecnic(n-1,last) + memotecnic(n -2, last));
}

console.log(memotecnic(1000))

// console.log(fibWithSteroids(10));
// console.log(fibWithSteroidsMyOwnVersion(10));
// console.log(fibWithSteroids(15));
// console.log(fibWithSteroidsMyOwnVersion(15));
// console.log(fibWithSteroids(20));
// console.log(fibWithSteroidsMyOwnVersion(20));
// console.log(fibWithSteroids(30));
// console.log(fibWithSteroidsMyOwnVersion(30));
// console.log(fibWithSteroids(100));
console.log(fibWithSteroidsMyOwnVersion(100));

//ternary operator with multiple variables;
for(let i = 0, j = 10; i <= 10 && j >= 0; i++, j--) {
    console.log(`a[${i}][${j}] = ${i}, ${j}`);
}