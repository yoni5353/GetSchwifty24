export class GameBoard {
  initBoard(size) {
    if (size < 3) {
      throw new Error("Board size cannot be less than 3.");
    }

    this.size = size;
    this.board = generateBoard(size);
    this.victory = false;
  }

  slideCell(index) {
    return this.switchCells(index, this.board.flat().findIndex(e => e == 0))
  }

  switchCells(firstIndex, secondIndex) {
    let p1 = boardIndexToPos(firstIndex, this.size);
    let p2 = boardIndexToPos(secondIndex, this.size);
    if (this.board[p1[1]][p1[0]] == 0 || this.board[p2[1]][p2[0]] == 0) {
      if (
        Math.abs(p1[0] - p2[0]) == 1 && p1[1] == p2[1] ||
        Math.abs(p1[1] - p2[1]) == 1 && p1[0] == p2[0]
      ) {
        let firstCell = this.board[p1[1]][p1[0]];
        this.board[p1[1]][p1[0]] = this.board[p2[1]][p2[0]];
        this.board[p2[1]][p2[0]] = firstCell;
        
        this.victory = checkVictory(this.board);
        return true;
      }
    }
    return false;
  }
}

function generateBoard(size) {
  let newBoard;
  while (!newBoard || !verifySolvable(newBoard) || checkVictory(newBoard)) {
    newBoard = generateBoardBlindly(size);
  }
  return newBoard;
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
    result += Math.floor(flatBoard.findIndex(e => e == 0) / board.length) + 1;
  }
  return result % 2 == 0;
}

export function checkVictory(board) {
  let flatBoard = board.flat();
  for (let i = 0; i < board.length * board.length - 1; i++) {
    if (flatBoard[i] != i + 1) {
      return false;
    }
  }
  return true;
} 

export function boardIndexToPos(index, boardsize) {
  return [index % boardsize, Math.floor(index / boardsize)];
}

export function popRandomItem(array) {
  return array.splice(Math.floor(Math.random() * array.length), 1)[0];
}
