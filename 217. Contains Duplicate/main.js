/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const sorted = nums.sort();
    let result = false;
    let i = 1;
    while(sorted.length > i){
        result = sorted[i] === sorted[i - 1];
        i++;
        if(result){
            break;
        }
    }
    return result;
};

console.log(containsDuplicate([6,2,1,0,3,4]));