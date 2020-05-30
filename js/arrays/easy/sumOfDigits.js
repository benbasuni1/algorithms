/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function(A) {
  let sum = 0;
  let minimum = Math.min(...A);
  minimum = minimum.toString().split('');

  sum = minimum.reduce((a, b) => parseInt(a) + parseInt(b), 0);

  return sum % 2 === 0 ? 1 : 0;
};

