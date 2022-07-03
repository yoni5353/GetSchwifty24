import { Board } from "./model/board.js";
import { updateBoard } from "./view/gamedisplay.js";

function main() {
  let gameboard = new Board(3, 3);
  updateBoard(gameboard.board);
}

main();