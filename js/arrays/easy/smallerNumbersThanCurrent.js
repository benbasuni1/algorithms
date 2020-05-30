/**
 * @param {number[]} nums
 * @return {number[]}
*/
var smallerNumbersThanCurrent = function(nums) {
    let greater = [];

    for (let i = 0; i < nums.length; i++) {
        let counter = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) counter++;
        }

        greater.push(counter);
    }

    return greater;
};

