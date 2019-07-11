function merge(sortedArrayLeft, sortedArrayRight, func=undefined) {

    if (func !== undefined) {
  
        if (func.name === "strComp") {
  
          return stringMerge(sortedArrayLeft, sortedArrayRight, func);
  
        }
  
        return hashMerge(sortedArrayLeft, sortedArrayRight, func);
  
    }
  
    return numMerge(sortedArrayLeft, sortedArrayRight);
  
  }
  
  
  
  function hashMerge(sortedArrayLeft, sortedArrayRight, func) {
  
      let finalMergedArray = [];
  
      let leftIndex = 0;
  
      let rightIndex = 0;
  
      while (leftIndex < sortedArrayLeft.length && rightIndex < sortedArrayRight.length) {
  
          if (func(sortedArrayLeft[leftIndex],sortedArrayRight[rightIndex]) < 0) {
  
              finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
              leftIndex++;
  
          }
  
          else {
  
            finalMergedArray.push(sortedArrayRight[rightIndex]);
  
            rightIndex++;
  
          }
  
        }
  
      while (leftIndex < sortedArrayLeft.length) {
  
          finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
          leftIndex++;
  
      }
  
      while (rightIndex < sortedArrayRight.length) {
  
          finalMergedArray.push(sortedArrayRight[rightIndex]);
  
          rightIndex++;
  
      }
  
      return finalMergedArray;
  
  }
  
  
  
  function stringMerge(sortedArrayLeft, sortedArrayRight, func) {
  
      let finalMergedArray = [];
  
      let leftIndex = 0;
  
      let rightIndex = 0;
  
      while (leftIndex < sortedArrayLeft.length && rightIndex < sortedArrayRight.length) {
  
          if (func(sortedArrayRight[rightIndex],sortedArrayLeft[leftIndex]) > 0) {
  
              finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
              leftIndex++;
  
          }
  
          else {
  
            finalMergedArray.push(sortedArrayRight[rightIndex]);
  
            rightIndex++;
  
          }
  
        }
  
      while (leftIndex < sortedArrayLeft.length) {
  
          finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
          leftIndex++;
  
      }
  
      while (rightIndex < sortedArrayRight.length) {
  
          finalMergedArray.push(sortedArrayRight[rightIndex]);
  
          rightIndex++;
  
      }
  
      return finalMergedArray;
  
  }
  
   
  
  function numMerge(sortedArrayLeft, sortedArrayRight) {
  
      let finalMergedArray = [];
  
      let leftIndex = 0;
  
      let rightIndex = 0;
  
      while (leftIndex < sortedArrayLeft.length && rightIndex < sortedArrayRight.length) {
  
          if (sortedArrayRight[rightIndex] > sortedArrayLeft[leftIndex]) {
  
              finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
              leftIndex++;
  
          }
  
          else {
  
              finalMergedArray.push(sortedArrayRight[rightIndex]);
  
              rightIndex++;
  
              }
  
          }
  
      while (leftIndex < sortedArrayLeft.length) {
  
          finalMergedArray.push(sortedArrayLeft[leftIndex]);
  
          leftIndex++;
  
          }
  
      while (rightIndex < sortedArrayRight.length) {
  
          finalMergedArray.push(sortedArrayRight[rightIndex]);
  
          rightIndex++;
  
          }
  
      return finalMergedArray;
  
  }
  
  
  
  function mergeSort(array, func=undefined){
  
      if (array.length <= 1) {
  
          return array;
  
      }
  
      let middle = Math.floor(array.length/2);
  
      let left = mergeSort(array.slice(0, middle), func);
  
      let right = mergeSort(array.slice(middle), func);
  
      return merge(left, right, func);
  
  }
  
  
  
  