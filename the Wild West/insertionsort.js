function insertionSort(object, func=null){

    if (object.length === 0) {

        return object;

    }

    if (func !== null) {

        if (object[0].name !== undefined) {

            return hashInsertSort(object, func);

        }

        else {

            return stringInsertSort(object, func);

        }

    }

    else {

        return intInsertSort(object);

    }

}



function hashInsertSort(hashObject, func) {

    let testElement;

    for (let firstUnsortedIndex=1;firstUnsortedIndex<hashObject.length;firstUnsortedIndex++) {

        testElement = hashObject[firstUnsortedIndex];

        for (var i=firstUnsortedIndex; i>0 && func(hashObject[i-1],testElement)>0;i--) {

            hashObject[i] = hashObject[i-1];

        }

        hashObject[i] = testElement;

    }

    return hashObject;

}

   

function stringInsertSort(arr, func) {

    let testElement;

    for (let firstUnsortedIndex=1;firstUnsortedIndex<arr.length;firstUnsortedIndex++) {

        testElement = arr[firstUnsortedIndex];

        for (var i=firstUnsortedIndex; i>0 && func(arr[i-1],testElement)===1;i--) {

            arr[i] = arr[i-1];

        }

        arr[i] = testElement;

    }

    return arr;

}



function intInsertSort(arr) {

    let testElement;

    for (let firstUnsortedIndex=1;firstUnsortedIndex<arr.length;firstUnsortedIndex++) {

        testElement = arr[firstUnsortedIndex];

        for (var i=firstUnsortedIndex; arr[i-1]>testElement;i--) {

            arr[i] = arr[i-1];

        }

        arr[i] = testElement;

    }

    return arr;

}

