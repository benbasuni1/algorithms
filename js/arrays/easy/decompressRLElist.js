/**
 * @param {number[]} nums
 * @return {number[]}

Scan through the input list in groups of two.
For each pair (a, b), append b to your output list a times.
[1, 2, 3, 4] as your input can be interpreted as "one 2, three 4's" -> [2, 4, 4, 4]
 */

var decompressRLElist = function(arr) {
    let returnArr = [];

    for (let i = 0; i < arr.length; i += 2) {
        let freq = arr[i];
        let val = arr[i + 1];
        if (freq !== undefined && val !== undefined) {
            for (let j = 0; j < freq; j++) {
                returnArr.push(val);
            }
        }
    }

    return returnArr;
};

