// function capitalizeFirst(arr) {
//     let newArr = [];
//     newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
//     return arr.length <= 1 ? newArr : newArr.concat(capitalizeFirst(arr.slice(1)));
// }

// console.log({} instanceof Object);

// console.log(capitalizeFirst(['car', 'banana', 'taco']));

function nestedEvenSum(obj) {
    let sum = 0; 
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            sum += nestedEvenSum(obj[key]);
        } else {
            if(!isNaN(obj[key])) {
                if(obj[key] % 2 === 0) {
                    sum += obj[key];
                }
            }
        }
    }
    return sum;
}

// sum+= Object.values(obj)[0]

let obj1 = {
outer: 2,
obj: {
    inner: 2,
    otherObj: {
    superInner: 2,
    notANumber: true,
    alsoNotANumber: "yup"
    }
}
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

console.log(nestedEvenSum(obj2));

function capitalizeWords(words) {
    let newArr = [];
    newArr.push(words[0].toUpperCase())
    return words.length <= 1 ? newArr : newArr.concat(capitalizeWords(words.slice(1)));
}

console.log(capitalizeWords(["i", 'am', 'learning', 'recursion']));

function stringifyNumbers(obj) {
    console.log(Object.assign({},obj))
    for(let key in obj) {
        if(typeof obj[key] == 'object') {
            stringifyNumbers(obj[key]);
        } else {
            if(!isNaN(obj[key])) {
                obj[key] = obj[key].toString();
            }
        }
    }
    return Object.assign({},obj);
} 

let obj3 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(obj3);
console.log(stringifyNumbers(obj3));

