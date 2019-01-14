// sorting numbers out
let testArr = [6,5,1,12,213,4,1,23,5,6,1256,12,6,5123];

function compareNumbers(number1, number2) {
    return number2 - number1;
}

testArr.sort(compareNumbers);
console.log(testArr);

function compareStrings(str1, str2) {
    return str2.length - str1.length;
}

let testArr2 = ['testarr','this is a string', 'servus', 's','hellou'];

console.log(testArr2.sort(compareStrings));

// function swap(arr,id1, id2) {
//     let temp = arr[id1];
//     arr[id1] = arr[id2];
//     arr[id2] = temp;
// }

const swap = (arr,id1,id2) => {
    [arr[id1], arr[id2]] = [arr[id2], arr[id1]];
}

function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i -1; j++) {
            if(arr[j] > arr[j+1]) {
                console.log(arr[j], [arr[j+1]]);
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

let testArr3 = [6,9,1,3,10,11,12,13,14];

console.log(bubbleSort(testArr3));

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length-1; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }
    return arr;
}

let testArr4 = [6,9,1,3,10,11,12,13,14];
console.log(selectionSort(testArr4));

function insertionSort(arr) {
    for(let i = 1; i < arr.length;i++) {
        let start = arr[i];
        for(var j = i -1; j >= 0 && arr[j] > start; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = start;
    }
    return arr;
}

let testArr5 = [12345,23,4,123,4,12,34,12,34,12,34,12,341,234,13,3,3,6,6,7,3,22,34,6,2346,23,46,23,6,234,6,24356456]
console.log(insertionSort(testArr5));


