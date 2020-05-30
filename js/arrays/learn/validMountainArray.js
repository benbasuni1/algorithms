/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) return false;

    let decreasing = false;
    let increasing = false;

    for (let i = 0; i < A.length; i++) {
        if (A[i] >= A[i + 1]) decreasing = true;
        if (A[i] <= A[i + 1]) increasing = true;
        if (A[i] <= A[i + 1] && decreasing) return false;
    }

    if (!decreasing || !increasing) return false

    return true;
};


/*
  Input: [3,5,5]
  Output: false

  Input: [0,3,2,1]
  Output: true
*/

/*

1. A.length >= 3
2. There exists some i with 0 < i < A.length - 1 such that:
    A[0] < A[1] < ... A[i-1] < A[i]
    A[i] > A[i+1] > ... > A[A.length - 1]
*/
