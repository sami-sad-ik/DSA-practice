const slidingWindow = (str) => {
    const seen = new Set();
    let left = 0;
    let length = 0;
    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left])
            left++
        }
        seen.add(str[right])
        length = Math.max(length, right - left + 1)
    }
    return length;
}

console.log(slidingWindow("abba"));