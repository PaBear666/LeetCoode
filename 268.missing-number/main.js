/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let potentialSum = 0;  
    for (let i = 0; i < nums.length + 1; i++) {
        potentialSum += i;
    }

    let sum = 0;
    nums.forEach(n => {
        sum += n;
    });

    return potentialSum - sum;
};

// Про арифметическую прогрессию забыл
// S = (a1 + aN) / 2; N -> length 

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function(nums) {
    let potentialSum = (1 + nums.length) * nums.length / 2;  

    let sum = 0;
    nums.forEach(n => {
        sum += n;
    });

    return potentialSum - sum;
};

console.log(missingNumber2([1,3,2]));