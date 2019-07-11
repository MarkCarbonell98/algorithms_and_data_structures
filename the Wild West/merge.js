function merge(sortedArrayLeft, sortedArrayRight, func=null) {

    if (func !== null) {
  
        return stringMerge(sortedArrayLeft, sortedArrayRight, func);
  
    }
  
    return numMerge(sortedArrayLeft, sortedArrayRight);
  
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