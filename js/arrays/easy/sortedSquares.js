/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let returnArray = [];

    for (let i = 0; i < A.length; i++) {
        returnArray.push(A[i] ** 2);
    }

    return returnArray.sort((a, b) => a - b);
};

/*
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
*/

/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
*/

