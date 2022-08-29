
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
    var buyPrice = undefined;

    for (let index = 1; index < prices.length; index++) {
        if( prices[index - 1] < buyPrice || buyPrice === undefined){
            buyPrice = prices[index - 1];
        }

        if(maxProfit < prices[index] - buyPrice){
            maxProfit = prices[index] - buyPrice;
        }
    }
    return maxProfit;
};


console.log(maxProfit([7,1,5,3,6,4]));