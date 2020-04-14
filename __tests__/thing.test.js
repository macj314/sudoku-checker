import {Board} from '../src/board.js';

describe('Thing', () => {
  var board;

  beforeEach(() => {
    board = new Board();
  });

  test('should correctly go through a sing row and test if it has any duplicate numbers', () => {
    expect(board.checkRow()).toEqual("row has no duplicates");
  });

  test('should correctly go through a board column and test if it has any duplicate numbers', () => {
    expect(board.checkColumn()).toEqual("column has no duplicates");
  });

  test('should correctly go through an array of rows and test if it has any duplicate numbers', () => {
    var filledBoard = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2]
      [6, 7, 2, 1, 9, 5, 3, 4, 8]
      [1, 9, 8, 3, 4, 2, 5, 6, 7]
      [8, 5, 9, 7, 6, 1, 4, 2, 3]
      [4, 2, 6, 8, 5, 3, 7, 9, 1]
      [7, 1, 3, 9, 2, 4, 8, 5, 6]
      [9, 6, 1, 5, 3, 7, 2, 8, 4]
      [2, 8, 7, 4, 1, 9, 6, 3, 5]
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];
    expect(board.checkBoardRows(filledBoard)).toEqual("row has no duplicates");
  });
});