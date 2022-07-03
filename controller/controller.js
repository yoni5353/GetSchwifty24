export class SchwiftyController {
  constructor(view, board) {
    this.gamedisplay = view;
    this.gameboard = board;
  }

  startGame() {
    this.gamedisplay.createBoard(this.gameboard.board);

    for (let button of this.gamedisplay.buttons) {
      button.addEventListener("click", () => clicked(button.index))
    }
  }
}

function clicked(buttonIndex) {
  console.log(`Button ${buttonIndex} clicked!`)
}
