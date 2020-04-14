export function Tile(number){
  this.number = number,
  this.xCoordinate = 0,
  this.yCoordinate = 0
}

export function Board(){
  this.boardSpace = [],
  this.tileCoordinates = 0
}

Board.prototype.fillBoard = function(){
  var tile = new Tile();
  for(x = 1; x <= 9; x++){
    tile.xCoordinate = x;
    for(y = 1; y <= 9; y++){
      tile.yCoordinate = y;
      this.boardSpace.push(tile);
    }
  }
}

Tile.prototype.check = function(){
  if (this.number === null){
    return "empty tile"
  }
}

//Idea 1: Board full of tile object 9x9
  //Board assignes a location to each tile ie: 1/1 for the top left corner, 9/9 for bottom right corner