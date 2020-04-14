import {Board} from '../src/board.js';

describe('Thing', () => {
  var baord;

  beforeEach(() => {
    board = new Board();
  });

  test('should correctly go through a board row and test if it has any duplicate numbers', () => {
    expect(board.checkRow()).toEqual("row has no duplicates");
  });
});