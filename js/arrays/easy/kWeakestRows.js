/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
  let result = [];
  let obj = {};
  for (let i = 0; i < mat.length; i++) {
    obj[i] = mat[i].reduce((a, b) => a + b, 0)
  }

  let sort = Object.values(obj).sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    let val = sort[i];
    result.push(
      Object.keys(obj).find(key => {
        if (obj[key] === val) {
          delete obj[key];
          return key;
        }
      })
    );
 }

  return result;
};



