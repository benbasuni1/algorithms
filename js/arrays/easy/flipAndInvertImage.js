/**
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    let current = A[i];
    let temp = current.reverse();
    for (let j = 0; j < A[i].length; j++) {
      current[j] = current[j] === 0 ? 1 : 0;
    }
  }
  return A;
};

