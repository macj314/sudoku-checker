export function Tile(number){
  this.number = number;
}

Tile.prototype.check = function(){
  if (this.number === null){
    return "empty tile"
  }
}