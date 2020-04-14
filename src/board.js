export function Board(){
  this.filledBoard = [];
}


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

//attempt to go through a multidimentional array
Board.prototype.checkBoardRows = function(){
  var arrayRows = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];
  for (var i = 0; i < arrayRows.length; i++){
    var compareArray = [];
    var innerArrayLength = arrayRows[i].length;
    for (var j = 0; j < innerArrayLength; j++) {
      if (compareArray[arrayRows[i][j]] === undefined){
        compareArray[arrayRows[i][j]] = 1;
      } else {
        return "this row has duplicates: " + arrayRows[i];
      }
    }
  }
  return "rows have no duplicates";
}