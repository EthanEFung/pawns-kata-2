//TODO: create models

function renderBoard(n) {
  const board = [];
  colIdx = "abcdefgh";
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

class Pawn {
  constructor(side, coord) {
    this.side = side;
    this.coord = coord;
  }
}

module.exports = { renderBoard };
