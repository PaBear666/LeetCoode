
/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
var cash = [];

 var climbStairs = function(n) {
    if(n > cash.length){
        cash.length = n;
    }
    
    if(n === 1 || n === 2 || n === 3){
        return n;
    }            

    if(cash[n - 1] === undefined){
        cash[n-1] = climbStairs(n - 1);
    }

    if(cash[n - 2] === undefined){
        cash[n-2] = climbStairs(n - 2);
    }

    return cash[n-1] + cash[n-2];
};

console.log(climbStairs(40));