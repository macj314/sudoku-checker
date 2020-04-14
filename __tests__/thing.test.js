import {Tile} from '../src/board.js';

describe('Thing', () => {
  var tile;

  beforeEach(() => {
    tile = new Tile(9);
  });

  test('should correctly create tile object and fill with a number', () => {
    expect(triangle.number).toEqual(9)
  });
});
