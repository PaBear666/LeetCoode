// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let container = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if(container[i + 1] !== 1){
            container[i + 1] = 0;
        }

        container[nums[i]] = 1;
    }

    for (let i = 1; i < container.length; i++) {
        if(container[i] == 0){
            result.push(i);
        }
    }

    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));