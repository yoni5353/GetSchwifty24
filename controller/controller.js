export class SchwiftyController {
  constructor(view, board) {
    this.gamedisplay = view;
    this.gameboard = board;
    this.lastPressed = undefined;
  }
  
  startGame() {
    this.gamedisplay.createBoard(this.gameboard.board);

    for (let button of this.gamedisplay.buttons) {
      button.addEventListener("click", () => this.clicked(button.index))
    }
  }

  clicked(buttonIndex) {
    if (this.lastPressed === undefined) {
      console.log(`Button ${buttonIndex} clicked!`)
      this.lastPressed = buttonIndex;
      return;
    }
    
    console.log(`Buttons ${this.lastPressed} and ${buttonIndex} clicked!`)
    this.lastPressed = undefined;
  }
}