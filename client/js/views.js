//TODO make views
const board = new Board(3).grid;
const $board = document.createElement("tbody");
let desired;
function renderView() {
  if (document.getElementById("board")) {
    document.getElementById("board").innerHTML = null;
  }

  $board.setAttribute("id", "board");
  board.forEach((row, i) => {
    const $row = document.createElement("tr");
    $row.setAttribute("class", "row");
    $row.setAttribute("row", i);
    row.forEach(sq => {
      const piece = sq.piece;
      const $space = document.createElement("td");
      $space.setAttribute("class", "space");
      $space.setAttribute("coord", sq.coord);

      $space.addEventListener("dragstart", function(e) {
        console.log(piece.coord);
      });
      $space.addEventListener("dragover", function(e) {
        e.preventDefault();
        desired = e.target.getAttribute("coord");
      });

      $space.addEventListener("dragend", function(e) {
        piece.advance(piece.coord, desired);
      });

      $space.addEventListener("drop", e => {});

      if (piece) {
        const $piece = document.createElement("span");
        $piece.setAttribute("draggable", true);
        $piece.innerHTML = piece.side;

        $space.appendChild($piece);
      }

      $row.appendChild($space);
    });
    $board.appendChild($row);
  });
  document.body.appendChild($board);
}

window.onload = () => {
  renderView();
};
