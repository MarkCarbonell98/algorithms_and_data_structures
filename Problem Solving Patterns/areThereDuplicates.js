
function areThereDuplicates(...args) {
    const frequencies = {};
    for(let arg of args) {
        frequencies[arg] = ++frequencies[arg] || 1;
        if(frequencies[arg] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates('a','b',3,4,5,3));

