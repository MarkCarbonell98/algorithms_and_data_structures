
function sameFrequency(first, second) {
    let firstString = ('' + first);
    let secondString = ('' + second);
    if(firstString.length !== secondString.length) {
        return false;
    }

    let frequency1 = {}, frequency2 = {};

    for(let number of firstString) {
        frequency1[number] = ++frequency1[number] || 1;
    }

    for(let number of secondString) {
        frequency2[number] = ++frequency2[number] || 1;
    }

    for(let number in frequency1) {
        if(frequency1[number] !== frequency2[number]) return false;
    }

    return true;
}

console.log(sameFrequency(1234,4231))