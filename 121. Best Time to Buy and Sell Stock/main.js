
/**
    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 */

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    var maxProfit = 0;
    var sellPrice = prices[0];
    var buyPrice = undefined;

    for (let index = 1; index < prices.length; index++) {
        if(buyPrice === undefined || prices[index - 1] < buyPrice){
            buyPrice = prices[index - 1];
        }
        sellPrice = prices[index];

        if(maxProfit < sellPrice - buyPrice){
            maxProfit = sellPrice - buyPrice;
        }
    }
    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]));