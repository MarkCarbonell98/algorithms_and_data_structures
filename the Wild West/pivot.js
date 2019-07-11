function pivot(arr, comparator, start = 0, end = arr.length-1) {

    const swap = (arr, idx1, idx2) => {
  
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    };
  
    let pivot = arr[start];
  
    let swapIdx = start;
  
  
  
    for (let i = start + 1; i <= end; i++) {
  
      // only lines added from colts example
  
      if (typeof(arr[0]) === "string") {
  
          if (comparator(arr[swapIdx], arr[i]) > 0) {
  
              swapIdx++;
  
              swap(arr, swapIdx, i);
  
        }
  
      // ====================================
  
      }
  
      else {
  
        if (pivot > arr[i]) {
  
          swapIdx++;
  
          swap(arr, swapIdx, i);
  
        }
  
      }
  
    }
  
    swap(arr, start, swapIdx);
  
    return swapIdx;
  
  }