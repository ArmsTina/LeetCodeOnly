/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b) => a - b);
    const minSum = prices[0] + prices[1];
    return minSum > money ? money : money - minSum;
};