import { Board } from "./model/board.js";
import { createBoard } from "./view/gamedisplay.js";

function main() {
  let gameboard = new Board(3, 3);
  for (let button of createBoard(gameboard.board)) {
    button.addEventListener("click", () => clicked(button.id))
  }
}

function clicked(buttonId) {
  console.log(`Button ${buttonId} clicked!`)
}

main();