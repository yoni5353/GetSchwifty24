import { Board } from "./model/board.js";
import { GameDisplay } from "./view/gamedisplay.js";

function main() {
  let gameboard = new Board(3, 3);
  let gamedisplay = new GameDisplay();

  gamedisplay.createBoard(gameboard.board);

  for (let button of gamedisplay.buttons) {
    button.addEventListener("click", () => clicked(button.index))
  }
}

function clicked(buttonIndex) {
  console.log(`Button ${buttonIndex} clicked!`)
}

main();