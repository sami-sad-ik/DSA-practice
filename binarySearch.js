const searchInsert = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1
        } if (arr[mid] > target) {
            right = mid - 1
        }
    }
    return left
}

// console.log(searchInsert([1, 3, 5, 6], 5))  // → 2
// console.log(searchInsert([1, 3, 5, 6], 2))  // → 1
// console.log(searchInsert([1, 3, 5, 6], 7))  // → 4
// console.log(searchInsert([1, 3, 5, 6], 0))  // → 0