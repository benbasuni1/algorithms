/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let result = [];

  if (n % 2 === 1) {
    result.push(0);
  }

  for (let i = 1; i <= n; i++) {
    result.push(i);
    result.push(-1 * i);
  }

  return result.slice(0, n);
};

