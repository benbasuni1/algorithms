/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -Infinity;

    arr.push(-1);

    for (let i = arr.length; i > 0; i--) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < max) {
            arr[i] = max;
        }
    }

    arr.shift();

    return arr;
};

/*
  Input: arr = [17,18,5,4,6,1]
  Output: [18,6,6,6,1,-1]
*/

/*
Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
After doing so, return the array.
*/

