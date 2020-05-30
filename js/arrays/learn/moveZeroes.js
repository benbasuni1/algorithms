/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[j], nums[i]] = [nums[i], nums[j]];
            j++;
        }
    }

    return j;
}

/*
  Input: [0,1,0,3,12]
  Output: [1,3,12,0,0]
*/


/*
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

