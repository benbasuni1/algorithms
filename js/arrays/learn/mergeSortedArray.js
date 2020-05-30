/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[m + i] !== undefined && nums2[i] !== undefined) {
            nums1[m + i] = nums2[i]
        }
    }

    nums1.sort((a, b) => a - b);
};

/*
Input:
  nums1 = [1,2,3,0,0,0], m = 3
  nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

  Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
*/
