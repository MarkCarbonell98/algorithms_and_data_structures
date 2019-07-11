
function min(a,b) {
    if (a > b) return b
    return a
}

function isEven(num) {
    if(num < 0) num = -num
    if(num === 0) return true
    if(num === 1) return false
    return isEven(num - 2)
}

console.log(min(20,15))
console.log(isEven(-1))

function countBs(s) {
    let count = 0
    for(let i = 0 ; i < s.length; i++) {
        if (s[i] === 'B') count ++
    }
    return count
}

function countChar(s,c) {
    let count = 0
    for(let i = 0 ; i < s.length; i++) {
        if (s[i] === c) count ++
    }
    return count
}

console.log(countChar("Balaclava", 'a'))

console.log(countBs("Balaclaba"))