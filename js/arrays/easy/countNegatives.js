/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let merged = [].concat.apply([], grid);
    let count = 0;

    for (let i = 0; i < merged.length; i++) {
        if (merged[i] < 0) count++;
    }

    return count;
};

