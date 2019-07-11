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

// console.log(nestedEvenSum(obj2));

function capitalizeWords(words) {
    let newArr = [];
    newArr.push(words[0].toUpperCase())
    return words.length <= 1 ? newArr : newArr.concat(capitalizeWords(words.slice(1)));
}

// console.log(capitalizeWords(["i", 'am', 'learning', 'recursion']));

function stringifyNumbersCopy(inputObj) {
    for(let key in inputObj) {
        if(typeof inputObj[key] === 'object') {
            stringifyNumbersCopy(inputObj[key]);
        } else if(!isNaN(inputObj[key]) && typeof inputObj[key] !== 'boolean') {
            inputObj[key] = ("" + inputObj[key]);
        }
    }
    return inputObj;
}


function stringifyNumbers(obj) {
    let inputObj = JSON.parse(JSON.stringify(obj));
    for(let key in inputObj) {
        // console.log(Object.values(inputObj));
        if(typeof inputObj[key] === 'object') {
            stringifyNumbersCopy(inputObj[key]);
        } else if(!isNaN(inputObj[key]) && typeof inputObj[key] !== 'boolean') {
            inputObj[key] = ("" + inputObj[key]);
        }
    }
    // console.log(Object.values(inputObj));
    return inputObj;
}

// function stringifyNumbers(inputObj) {
//     for(let key in inputObj) {
//         if(typeof inputObj[key] === 'object') {
//             stringifyNumbers(inputObj[key]);
//         } else if(!isNaN(inputObj[key]) && typeof inputObj[key] !== 'boolean') {
//             inputObj[key] = ("" + inputObj[key]);
//         }
//     }
//     return inputObj;
// }

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

let obj4 = {
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
// console.log(obj3);
// console.log("first",stringifyNumbers(obj4));
// console.log("second",stringifyNumbersNoCopy(obj3));
// console.log(stringifyNumbers(obj3));

function collectStrings(obj) {
    let strings = [];
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            strings = strings.concat(collectStrings(obj[key]));
        } else if(typeof obj[key] === 'string') {
            strings.push(obj[key]);
        }
    }
    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(obj));

//colts solutions

function capitalizeWords(array) {
    if(array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
}

function nestedEvenSum(obj, sum = 0) {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if(typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
}

function capitalizeFirst (array) {
if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
}
const res = capitalizeFirst(array.slice(0, -1));
const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
res.push(string);
return res;
}

function stringifyNumbers(obj) {
var newObj = {};
for (var key in obj) {
    if (typeof obj[key] === 'number') {
    newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
    newObj[key] = stringifyNumbers(obj[key]);
    } else {
    newObj[key] = obj[key];
    }
}
return newObj;
}

function collectStrings(obj) {
    var stringsArr = [];
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
    gatherStrings(obj);
    return stringsArr;
}

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
    return stringsArr;
}

function superStringifyNumbers(obj) {
    let newObj = {};
    for(let key in obj) {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key] = superStringifyNumbers(obj[key]);
        } else if(typeof obj[key] === 'number') {
            newObj[key] = (''+obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

console.log(superStringifyNumbers(obj3));

