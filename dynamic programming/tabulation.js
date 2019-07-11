//resolving memoization

//now comes bottom up 

//tabulation stores the result of the last iteration in an array, in an iterative way. this has way better space complexity

const fibTabular = n => {
    if(n <= 1) return 1;
    let last = [0,1,1];
    for(let i = 3; i <= n; i++) {
        last[i] = last[i-1] + last[i-2];
    }
    return last[n];
}

// const fibRecursive = (n, known = [0,1,1]) => known[n] !== 0 ? known[n] : (known[n] = fibRecursive(n-1, known) + fibRecursive(n-2, known),
// known[n]); 

// const fibRecursive = (n, known = [undefined,1,1]) => {
//     return known[n] !== undefined ? known[n] : (known[n] = fibRecursive(n-1, known) + fibRecursive(n-2, known, known), known[n]);
// }

const fibRecursive = (n, known = [undefined,1,1]) => known[n] !== undefined ? known[n] : (known[n] = fibRecursive(n-1, known) + fibRecursive(n-2, known), known[n]);

for(let i = 10; i <= 10000; i*=i) {
    console.log(fibTabular(i));
    console.log(fibRecursive(i));
}