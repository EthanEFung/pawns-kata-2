//TODO: create test suite
const { renderBoard } = require("../client/js/models");

describe("renderBoard", function() {
  it("should render a board when a size is given", function() {
    const actual = renderBoard(3);
    const expected = [
      [
        { piece: null, coord: "a3" },
        { piece: null, coord: "b3" },
        { piece: null, coord: "c3" }
      ],
      [
        { piece: null, coord: "a2" },
        { piece: null, coord: "b2" },
        { piece: null, coord: "c2" }
      ],
      [
        { piece: null, coord: "a1" },
        { piece: null, coord: "b1" },
        { piece: null, coord: "c1" }
      ]
    ];
    expect(actual).toEqual(expected);
  });
});
