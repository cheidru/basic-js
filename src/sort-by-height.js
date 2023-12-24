const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let len = arr.length;
  let result = [];
  let tmp = [];
  let tmpIndex = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] === -1) result.push(-1);
    if (arr[i] !== -1) {
      result.push(undefined);
      tmp.push(arr[i]);
    }
  }
  tmp.sort((a, b) => a - b);
  for(let i = 0; i < len; i++) {
    if (result[i] === -1) continue;
    if (result[i] === undefined) {
      result[i] = tmp[tmpIndex];
      tmpIndex++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
