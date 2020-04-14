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

    expect(board.checkBoardRows()).toEqual("rows have no duplicates");
  });
});