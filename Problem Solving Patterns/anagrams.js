const assert = require("assert");
const process = require("process");

const start = process.hrtime();
const validAnagram = (str1, str2) => {
    let frequencies1 = {}, frequencies2 = {};

    for(let char of str1) {
        frequencies1[char] = ++frequencies1[char] || 1;
    }

    for(let char of str2) {
        frequencies2[char] = ++frequencies2[char] || 1;
    }

    for(let letter in frequencies1) {
        if(frequencies2[letter] !== frequencies1[letter]) return false; 
    }

    return true;
}

console.log(validAnagram("anagram", "nagaram"))
const end = process.hrtime(start);
console.log("valid anagram started at %dms and finished at %dns", end[0], end[1] / 1000000);

assert(validAnagram('aaz', 'zza') === false);
assert(validAnagram('anagram', 'nagaram') === true);
assert(validAnagram('rat', 'car') === false);
assert(validAnagram('awesome', 'awesom') === false);
assert(validAnagram('qwerty', 'qeywrt') === true);
assert(validAnagram('texttwisttime', 'timetwisttext') === true);


// colts version
const start1 = process.hrtime();
const validAnagramColt = (first, second) => {
   if(first.length !== second.length) {
       return false;
   }

   const lookup = {};
   for(let i = 0; i < first.legnth; i++) {
       let letter = first[i];
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
   }

   for(let i = 0; i < second.length; i++) {
       let letter = second[i];
       if(!lookup[letter]) {
           return false;
       } else {
           lookup[letter] -= 1;
       }
   }

   return true;
}

console.log(validAnagramColt("anagram", "nagaram"))
const end1 = process.hrtime(start1);
console.log("refactored anagram started at %dms and finished at %dns", end1[0], end1[1] / 1000000);
assert(validAnagramColt('aaz', 'zza') === false);
assert(validAnagramColt('anagram', 'anagram') === true);
assert(validAnagramColt('rat', 'car') === false);
assert(validAnagramColt('awesome', 'awesom') === false);
assert(validAnagramColt('qwerty', 'qeywrt') === true);
assert(validAnagramColt('texttwisttime', 'timetwisttext') === true);