/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    var resultArray = [];
    resultArray.length = n + 1;
    resultArray[0] = 0;

    let nextValue = 1;
    let gettedIndex = 0;

    for (let index = 1; index < resultArray.length; index++) {
        
        if(index === nextValue){
            nextValue *= 2;
            gettedIndex = 0;
        }

        resultArray[index] = resultArray[gettedIndex] + 1;
        gettedIndex++; 
    }

    return resultArray;
};


console.log(countBits(19))