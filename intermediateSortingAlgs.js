let data1 = Array.apply(null, {length: 7}).map(Function.call, Math.random);
let data2 = Array.apply(null, {length: 9}).map(Function.call, Math.random);

// O(n^2) vs O(n log n);
// my solution... not working
function merge(arr1, arr2) {
    let newArr = [];
    let countArr1 = 0, countArr2 = 0;
    while(countArr1 < arr1.length && countArr2 < arr2.length) {
        if(arr1[countArr1] < arr2[countArr2]) {
            newArr.push(arr1[countArr1]);
            countArr1++;
        } else {
            newArr.push(arr2[countArr2]);
            countArr2++;
        }
    }
    while(countArr1 < arr1.length) {
        newArr.push(arr1[countArr1]);
        countArr1++;
    }
    while(countArr2 < arr2.length) {
        newArr.push(arr2[countArr2]);
        countArr2++;
    }
    return newArr;
}

console.log(merge([1,10,20], [2,14,99,100]));

function mergeColt(arr1,arr2) {
    let result = [];
    let i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log(mergeColt(data1, data2));

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let arr1 = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    let arr2 = mergeSort(arr.slice(Math.floor(arr.length/2), arr.length));
    return merge(arr1, arr2);
}

console.log(mergeSort(data1,data2));

function swap(arr, a,b) {
    [arr[a],arr[b]] = [arr[b],arr[a]];
}

function partition(arr, start = 0, end = arr.length+1) {
    let pivot = arr[start], swapId = start;
    for(let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapId++;
            swap(arr, swapId, i);
        }
    }
   swap(arr, start, swapId);
   return swapId;
} 

function quickSort(arr, left = 0, right = arr.length-1) {
    if(left < right) {
        let pivotIndex = partition(arr, left,right); //3
        //left
        quickSort(arr,left,pivotIndex-1);
        // right
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

// console.log(partition([4,8,2,1,5,7,6,3]));
console.log(quickSort([4,8,2,1,5,7,6,3]));


//radix sort
//get digit with string version
function getDigit(num,place) {
    let newNum = (''+num);
    console.log(num, place, newNum[place]);
    return Number(newNum[newNum.length - place - 1]) || 0;
}

function getDigitMath(num,place) {
    return Math.floor(Math.abs(num)/ Math.pow(10,place)) % 10;
}

function digitCount(num) {
    return (''+num).length;
}

function digitCountMath(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, digitCount(arr[i]));
    }
    return max;
}

function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for(let i = 0; i < maxDigits; i++) {
        let bucket = Array.from({length: 10}, () => []);
        for(let j = 0; j < arr.length; j++) {
            bucket[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

console.log(radixSort([2,3,4,12,1,23,1,34,1,234,1,234,123,241,234,1234,1234,4,5,1243,7,7,7,77,7,7,7,77,23,45,23,45,23,45,23,4,1,75686,78,2435,96789,6789,67896,78967,89,6789]))



console.log(digitCount(1234213));
console.log(digitCountMath(1234213));

console.log(getDigitMath(1234, 0));

console.log(getDigit(1234, 0));

console.log(mostDigits([123,1234,32,4,1,0]));