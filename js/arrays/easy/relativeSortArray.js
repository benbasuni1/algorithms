/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let result = [];
  let tempArr1 = [...arr1];

  for (let i = 0; i < arr2.length; i++) {
    const removedNums = tempArr1.filter(num => num === arr2[i]);
    tempArr1 = tempArr1.filter(num => num !== arr2[i])

    result.push(...removedNums);
  }

  result.push(...tempArr1.sort((a, b) => a - b));

  return result;
};

