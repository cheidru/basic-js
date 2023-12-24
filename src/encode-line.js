const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = [];
  let double = '';
  let doubleNum = 1;

  for (let i=1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      double = arr[i];
      doubleNum++;
    } else if (doubleNum > 1) {
        result.push(doubleNum + '');
        result.push(double);
        doubleNum = 1;
        double = arr[i];
        console.log(result, doubleNum, arr[i]);
    } else {
        result.push(arr[i-1]);
        double = arr[i];
        doubleNum = 1;
        console.log(result, doubleNum, arr[i]);
    }
    if (i == arr.length - 1) {
        if (doubleNum > 1) result.push(doubleNum);
        result.push(double);
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
