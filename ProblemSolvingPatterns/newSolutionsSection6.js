function minSubArrayLen(arr, limit) {
    let start = 0, end = 0, total = 0, minLen = Infinity;
    while(start < arr.length) {
        if(start < total && end < arr.length) {
            total += arr[end];
            end++;
        } else if(total >= limit) {
            minLen = Math.min(Infinity, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
    let start = 0, long = 0, checked = {};
    for(let i = 0; i < str.length; i++) {
        if(checked[str[i]]) {
            start = Math.max(start, checked[str[i]]);
        }
        long = Math.max(long, i - start + 1);
        checked[str[i]] = i + 1;
    }
    return long;
}

function findRotatedIndex(arr, val){
 
    const rotate = (arr) => {
        let swap = 0;
        arr.forEach((n, index) => {
            if(arr[index] > arr[index + 1]) {
                swap = index + 1;
            }
        });
 
        arr.sort((a,b) => a - b);
 
        console.log(arr);
        return swap;
    };
 
    let swap = rotate(arr);
    
    let left = 0;
    let right = arr.length - 1;
    let idx = -1;
    do {
 
        let guess = Math.floor((right + left)/2);
 
        if(arr[guess] > val) {
            right = guess - 1;
        }
        if(arr[guess] < val) {
            left = guess + 1;
        }
        if(arr[guess] === val) {
            idx = guess;
            break;
        }
 
    } while(left <= right);
 
    return idx > -1 ? (idx + swap)%arr.length : idx;
}

function sortedFrequency(arr, val){
  
    let mid = Math.floor(arr.length/2);
    let tmp;
   
    const first = (arr,val) => {
      let left = 0;
      let right = arr.length - 1;
      let idx = -1;
   
      do {
   
        if(arr[left] === val) {
          idx = left;
          break;
        }
        let guess = Math.floor((right + left)/2);
   
        if(arr[guess] === val) {
          if(arr[left] === val) {
            idx = left;
            break;
          } else if (arr[left] < val) {
            left++;
          } else if(arr[guess - 1] && arr[guess] === val) {
            right--;
          } else {
            idx = guess;
            break;
          }
        }
   
        if(arr[guess] < val) {
          left = guess+1;
          if(arr[left] === val) return left;
        }
        if(arr[guess] > val) {
          right = guess-1;
        }
   
      } while(left < right);
   
      return idx;
      
    };
   
    const last = (arr,val) => {
      let left = 0;
      let right = arr.length - 1;
      let idx = -1;
   
      do {
   
        if(arr[right] === val) {
          idx = right;
          break;
        }
   
        let guess = Math.floor((right + left)/2);
   
        if(arr[guess] === val) {
          if(arr[guess+1] && arr[guess+1] === val) {
            left = guess;
          } else {
            idx = guess;
            break;
          }
        }
   
        if(arr[guess] < val) {
          left = guess+1;
        }
        if(arr[guess] > val) {
          right = guess-1;
        }
   
      } while(left < right);
   
      return idx;
    };
   
    let lowIdx = first(arr, val);
    let highIdx = last(arr, val);
    
    console.log('Low: ', lowIdx);
    console.log('High: ', highIdx);
   
    return highIdx > -1 && lowIdx > -1 ? highIdx - lowIdx + 1 : -1;
   
  }

//   function bubbleSort(arr){
//     var noswaps;
//     // add whatever parameters you deem necessary - good luck!
//     function swap(temp, i, j){
//         temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//     }
//     for(var i = arr.length; i > 0; i--){
//       noswaps = true;
//         for (var j = 0; j < i-1; j++){
//               var temp = arr[j];
//             if(arr[j+1] < arr[j]){
//                 swap(temp, j+1, j);
//                 noswaps = false;
//             }
//         }
//         if(noswaps) break;
//     }
//     return arr;
//   }

  function bubbleSort(object, func=null){

    if (object.length === 0) {

        return object;

    }

    if (func !== null) {

        if (object[0].name !== undefined) {

            return hashObjectBubbleSort(object, func);

        }

        else {

            return stringBubbleSort(object, func);

        }

    }

    else {

        return intBubbleSort(object);

    }

}



function hashObjectBubbleSort(hashObj, func) {

    for (let i=0; i<hashObj.length-1;i++) {

        for (let j=0; j<hashObj.length-i-1;j++) {

            if(func(hashObj[j], hashObj[j+1]) > 0) { //func will be oldestToYoungest()

                let temp = hashObj[j];

                hashObj[j] = hashObj[j+1];

                hashObj[j+1] = temp;

            }

        }

    }

    return hashObj;

}



function stringBubbleSort(arr, func) {

    for (let i=0; i<arr.length-1;i++) {

        for (let j=0; j<arr.length-i-1;j++) {

            if(func(arr[j], arr[j+1])===1) { //func will be strComp()

                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

            }

        }

    }

    return arr;

}





function intBubbleSort(arr) {

    for (let i=0; i<arr.length-1;i++) {

        for (let j=0; j<arr.length-i-1;j++) {

            if(arr[j] > arr[j+1]) {

                let temp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = temp;

            }

        }

    }

    return arr;

}
 
function selectionSort(arr)
{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr);
            if(arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
        }
    }
    return arr;
}


console.log(selectionSort([1,4,5,6,2,1,2,3]));

function selectionSort(data, func=null) {

    if (data.length === 0) {

        return data;

    }

    if (func !== null) {

        if (typeof(data[0].age) === "number") {

            return hashSort(data, func);

        }

        else if (typeof(data[0]) === "string") {

        return stringSort(data, func);

        }

    }

    else if (typeof(data[0]) === "number") {

        return numberSort(data);

    }

    else {

        return undefined;

    }

}



function hashSort(hash, func) {

    var oldest = hash[0];

    var index = 0;

    var temp;

    while (index < hash.length-1) {

        for (var i = index; i<hash.length;i++) {

            if (func(oldest, hash[i]) > 0) {

                temp = oldest;

                oldest = hash[i];

                hash[i] = temp;

                hash[index] = oldest;

            }

        }

        index++;

        oldest = hash[index];

    }

    return hash;

}



function stringSort(arr, func) {

    var smallest = arr[0];

    var index = 0;

    var temp;

    while (index < arr.length-1) {

        for (var i = index; i<arr.length;i++) {

            if (func(smallest, arr[i]) === 1) {

                temp = smallest;

                smallest = arr[i];

                arr[i] = temp;

                arr[index] = smallest;

            }

        }

        index++;

        smallest = arr[index];

    }

    return arr;

}



function numberSort(arr) {

    var smallest = arr[0];

    var index = 0;

    var temp;

    while (index < arr.length-1) {

        for (var i = index; i<arr.length;i++) {

            if (smallest > arr[i]) {

                temp = smallest;

                smallest = arr[i];

                arr[i] = temp;

                arr[index] = smallest;

            }

        }

        index++;

        smallest = arr[index];

    }

    return arr;

}
