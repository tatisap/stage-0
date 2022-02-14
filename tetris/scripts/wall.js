import { Block } from "./block.js";

export class Wall {
  constructor(width, height) {
    let rows = [];
    for (let i = 0; i < height; i++) {
      rows.push(new Row(width));
    }
    this.rows = rows;
    this.width = width;
    this.height = height;
  }
  getBrickByCoords(x, y) {
    return this.rows[y][x];
  }
  getRow(y) {
    return this.rows[y];
  }
  setBricksInRow(y) {
    let row = this.getRow(y);
    for (let i = 0; i < this.width; i++) {
      row.bricks[i] = new Block(i, y);
      row.bricks[i].insert();
      row.bricks[i].position();
    }
  } 
  getColumn(x) {
    return this.rows.map(row => row.bricks[x]);
  }
  getExistedBricksPositions() {
    return this.rows.flat(Infinity).map(brick => brick.getCurrentPosition());
  }
}

class Row {
  constructor(length) {
    let row = []
    for (let i = 0; i < length; i++) {
      row.push('[]');
    }
    this.bricks = row;
  }
}