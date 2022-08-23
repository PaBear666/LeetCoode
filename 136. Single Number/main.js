// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let result = nums[0];
    
    for (let index = 1; index < nums.length; index++) {
        result ^= nums[index];
    }

    return result;
};

console.log(singleNumber([1,2,1,6,6,8,8,15,15,22,22]));