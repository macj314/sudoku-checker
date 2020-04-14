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
Board.prototype.checkBoardRows = function(arrayRows){
  var compareArray = [];
  for (var i = 0; i <= arrayRows.length; i++){
    var innerArrayLength = arrayRows.length;
    for (var j = 0; j <= innerArrayLength.length; j++){
      if (compareArray[arrayRows[i][j]] === undefined){
        compareArray[arrayRows[i][j]] = 1;
      } else {
        return "this row has duplicates:" + arrayRows[i][j];
      }
    }
    return "rows have no duplicates";
  }
}