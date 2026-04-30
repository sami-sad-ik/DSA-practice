const substringNoDuplicate = (str) => {
    const strArr = str.split("");
    const objHash = {};
    for (let str of strArr) {
        objHash[str] = (objHash[str] || 0) + 1
    }
}