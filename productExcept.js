const productExcept = (arr) => {
    const result = new Array(arr.length);
    result[0] = 1;
    let right = 1;
    for (let i = 1; i < arr.length; i++) {
        result[i] = result[i - 1] * arr[i - 1];
    }
    for (i = arr.length - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right = right * arr[i]
    }
    return result
}

console.log(productExcept([1, 2, 3, 4]));