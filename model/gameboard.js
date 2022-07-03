export class GameBoard {
  constructor(size) {
    this.board = generateBoard(size);
  }
}

function generateBoard(size) {
  return generateBoardBlindly(size);
}

function generateBoardBlindly(size) {
  let values = Array.from(Array(size * size).keys());
  let board = [];
  for (let w = 0; w < size; w++) {
    let row = [];
    for (let h = 0; h < size; h++) {
      row.push(popRandomItem(values));
    }
    board.push(row);
  }
  return board;
}

export function verifySolvable(board) {
  let greaterThans = 0;
  let flatBoard = board.flat();
  for (let i = 0; i < flatBoard.length; i++) {
    for (let rest = i + 1; rest < flatBoard.length; rest++) {
      if (flatBoard[rest] && flatBoard[i] > flatBoard[rest]) {
        greaterThans++;
      }
    }
  }
  let result = greaterThans;
  if (board.length % 2 == 0) {
    result += Math.floor(flatBoard.findIndex((e) => e == 0) / board.length) + 1;
  }
  return result % 2 == 0;
}

function popRandomItem(array) {
  return array.splice(Math.floor(Math.random() * array.length), 1);
}
