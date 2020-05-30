/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let j = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            [A[i], A[j]] = [A[j], A[i]]
            j++;
        }
    }

    return A;
};

/*
  Input: [3,1,2,4]
  Output: [2,4,3,1]

  The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

