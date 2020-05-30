/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let map = {}

    for (let i of arr) {
        if (map[i] > -Infinity) return true
        map[i * 2] = i
        map[i / 2] = i
    }

    return false
};

/*
Input: arr = [10,2,5,3]
Output: true

Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

Input: arr = [7,1,14,11]
Output: true

Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
*/

/*
Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
*/




