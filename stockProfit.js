const maxProfit = (pricesArr) => {
    let minPrice = pricesArr[0];
    let maxProfit = 0;
    for (let i = 0; i < pricesArr.length; i++) {
        if (pricesArr[i] < minPrice) {
            minPrice = pricesArr[i];
        }

        let profit = pricesArr[i] - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));