const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let fieldWidth = matrix[0].length;
  let filedHeight = matrix.length;
  let result = [];
  for (let i = 0; i < filedHeight; i++) {
    result[i].fill(0, fieldWidth);
  }

  for (let i = 0; i < fieldWidth; i++) {
    for (let j = 0; j < filedHeight; j++) {

      if (matrix[i][j] == true) {
        if (i > 0 && i < fieldWidth - 1) {
          result[i - 1][j] += 1;
          if (j > 0) result[i - 1][j - 1] += 1;
          if (j < filedHeight - 1) result[i - 1][j + 1] += 1;
        }


        if 
      }
      
      // if (i > 0 && j > 0) {
      //   if (matrix[i - 1][j - 1] == true) result[i][j] += 1;
      //   if (matrix[i - 1][j] == true) result[i][j] += 1;
      //   if (matrix[i][j - 1] == true) result[i][j] += 1;
      // }

      // if (i < filedHeight - 1 && j > 0) {
      //   if (matrix[i + 1][j - 1] == true) result[i][j] += 1;
      //   if (matrix[i + 1][j] == true) result[i][j] += 1;
      // }
      
      // if (i < filedHeight - 1 && j > 0) {
      //   if (matrix[i + 1][j - 1] == true) result[i][j] += 1;
      //   if (matrix[i + 1][j] == true) result[i][j] += 1;
      // }

      


      checkField(i, j);
    }
  }

  function checkField(i, j) {
    let limitLeft = i > 0 ? i - 1 : false;
    let limitRight = i == fieldWidth - 1 ? false : i + 1;
    let limitTop = j > 0 ? j - 1 : false;
    let limitBottom = j == filedHeight - 1 ? false : j + 1;

    for ()

  }
}

module.exports = {
  minesweeper
};
