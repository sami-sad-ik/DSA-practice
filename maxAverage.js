const maxAverage = (arr, k) => {
    let left = 0;
    let sum = 0;
    let maxAverage = -Infinity;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        if (right >= k - 1) {
            const average = sum / k;
            maxAverage = Math.max(maxAverage, average)
            sum -= arr[left];
            left++
        }

    }
    return maxAverage
}

console.log(maxAverage([1, 12, -5, -6, 50, 3], 4));