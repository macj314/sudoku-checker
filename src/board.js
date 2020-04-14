export function Tile(){
  this.number = number,
  this.xCoordinate = 0,
  this.yCoordinate = 0
}

export function Board(){
  this.boardSpace = [],
  this.tileCoordinates = 0
}


//Attempt to populate board with predifined numbers.
//Find a way to section off each row/column
//Use the rows/columns in the jest test.

// Board.prototype.fillBoard = function(){
//   // var filledTiles = [];
//   var tile = new Tile();
//   var row = [];
//   var column = [];
//   for(x = 1; x <= 9; x++){
//     tile.xCoordinate = x;
//     for(y = 1; y <= 9; y++){
//       tile.yCoordinate = y;
//       this.boardSpace.push(tile);
//     }
//   }
// }

Board.prototype.checkRow = function(){
  var row = [5, 3, 4, 6, 7, 8, 9, 1, 2];
  var compareArray = [];
  for (var i = 0; i <= row.length; i++){
    if (compareArray[row[i]] === undefined){
      compareArray[row[i]] = 1;
    } else {
      return "row has duplicates";
    }
  }
  return "row has no duplicates";
}

Board.prototype.checkColumn = function(){
  var column = [6, 7, 2, 1, 9, 5, 3, 4, 8];
  var compareArray = [];
  for (var i = 0; i <= column.length; i++){
    if (compareArray[column[i]] === undefined){
      compareArray[column[i]] = 1;
    } else {
      return "column has duplicates";
    }
  }
  return "column has no duplicates";
}


// Tile.prototype.check = function(){
//   if (this.number === null){
//     return "empty tile"
//   }
// }