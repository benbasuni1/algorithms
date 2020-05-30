/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b);

    let uniqueArr = Array.from(new Set(nums));

    if (uniqueArr.length >= 3) {
        return uniqueArr[uniqueArr.length - 3]
    }

    return Math.max(...uniqueArr);
};


/* 
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
*/

