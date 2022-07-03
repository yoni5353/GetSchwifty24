import { Board } from "./model/board.js";
import { createBoard } from "./view/gamedisplay.js";

function main() {
  let gameboard = new Board(3, 3);
  createBoard(gameboard.board)
}

main();