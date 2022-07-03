import { Board } from "./model/board.js";
import { createBoard } from "./view/gamedisplay.js";

function main() {
  let gameboard = new Board(3, 3);
  for (let button of createBoard(gameboard.board)) {
    button.addEventListener("click", () => clicked(button.index))
  }
}

function clicked(buttonIndex) {
  console.log(`Button ${buttonIndex} clicked!`)
}

main();