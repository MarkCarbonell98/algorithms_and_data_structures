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

