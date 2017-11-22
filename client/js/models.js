//TODO: create models

class Board {
  constructor(n) {
    this.grid = this.render(n);
    this.startGame(n);
  }
  render(n) {
    const board = [];
    const colIdx = "abcdefgh";
    for (let i = 0; i < n; i++) {
      const row = [];
      let rowIdx = i;
      for (let i = 0; i < n; i++) {
        row.push({ piece: null, coord: colIdx[i] + (rowIdx + 1) });
      }
      board.unshift(row);
    }
    return board;
  }
  startGame(n) {
    this.grid[0].forEach(sq => (sq.piece = new Pawn("black", sq.coord)));
    this.grid[n - 1].forEach(sq => (sq.piece = new Pawn("white", sq.coord)));
  }
}

class Pawn {
  constructor(side, coord) {
    this.side = side;
    this.coord = coord;
  }

  /**
   *
   * @param {*} currentCoord
   * @param {*} desiredCoord
   * o: a pawn with a new coord
   */
  advance(currentCoord, desiredCoord) {
    console.log("curr", currentCoord, "desired", desiredCoord);
  }
  capture(currentCoord, desiredCoord) {}
}

class Player {
  constructor(winStatus, side) {
    this.winStatus = winStatus;
    this.side = side;
  }
}

// module.exports = { renderBoard, Pawn, Player };
