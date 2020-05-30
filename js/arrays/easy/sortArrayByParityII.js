/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let even = [];
  let odd = [];
  let j = 0;
  let k = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) even.push(A[i]);
    else odd.push(A[i]);
  }

  for (let i = 0; i < A.length; i++) {
    if (i % 2 === 0) {
      A[i] = even[j];
      j++;
    }
    else {
      A[i] = odd[k];
      k++;
    }
  }

return A;

};


