/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(nums) {
    let another = [...nums];
    nums.sort((a, b) => a - b);
    let counter = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== another[i]) counter++;
    }



    return counter;
};

/*
Input: heights = [1,1,4,2,1,3]
Output: 3

Explanation:
Current array : [1,1,4,2,1,3]
Target array  : [1,1,1,2,3,4]
On index 2 (0-based) we have 4 vs 1 so we have to move this student.
On index 4 (0-based) we have 1 vs 3 so we have to move this student.
On index 5 (0-based) we have 3 vs 4 so we have to move this student.
*/

