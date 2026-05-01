const minSubArrayLen = (target, arr) => {
    let left = 0;
    let sum = 0;
    let result = Infinity;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum >= target) {
            result = Math.min(result, right - left + 1)
            sum -= arr[left];
            left++
        }
    }
    return result === Infinity ? 0 : result

};

console.log(minSubArrayLen(11, [1, 2, 5, 4, 5, 6]));