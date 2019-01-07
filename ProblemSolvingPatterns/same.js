console.time("sameColtFirstVersion");

const sameColtFirstVersion = (arr1, arr2) => {
    if(arr1.length !== arr2.length)
    return false;
    
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2);
        if(correctIndex === -1) 
            return false;
            
            arr2.splice(correctIndex,1);
    }
    return true;
}

console.log(sameColtFirstVersion([1,2,3,4,0,8], [16,1,14,12,81,9,4,25,0,8,64]));
console.timeEnd("sameColtFirstVersion");
console.log("\n");

console.time("same");
//my solution
const same = (arr1, arr2) => {
    let frequencies1 = {}, frequencies2 = {};
    for(let number of arr1) {
        number *= number;
        frequencies1[number] = frequencies1[number]++ || 1;
    }
    
    for(let number of arr2) {
        frequencies2[number] = frequencies2[number]++ || 1;
    }
    
    for(let value in frequencies1) {
        if(!(frequencies2[value] === frequencies1[value])) return false;
    }
    
    return true;
}

//colts solution
console.log(same([1,2,3,4,0,8], [16,1,14,12,81,9,4,25,0,8,64]));
console.timeEnd("same");

console.log("\n");

console.time("sameREFACTORED");
//my solution
const sameREFACTORED = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencies1 = {}, frequencies2 = {};
    for(let val of arr1) {
        frequencies1[val] = (frequencies1[val] || 0) + 1;
    }

    for(let val of arr2) {
        frequencies2[val] = (frequencies2[val] || 0) + 1;
    }

    for(let key in frequencies1) {
        if(!(key ** 2 in frequencies2)) {
            return false;
        }

        if(frequencies2[key**2] !== frequencies1[key]) {
            return false;
        }
    }
    return true;
}

//colts solution
console.log(sameREFACTORED([1,2,3,4,0,8], [1,4,9,16,0,64]));
console.timeEnd("sameREFACTORED");

