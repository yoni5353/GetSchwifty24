export class SchwiftyController {
  constructor(view, board) {
    this.gamedisplay = view;
    this.gameboard = board;
    this.lastPressed = undefined;
  }
  
  startGame() {
    let size = 3;
    this.gamedisplay.createBoard(this.gameboard.board, this.gameButtonMethodGenerator(size * size));
  }

  * gameButtonMethodGenerator(amount) {
    for (let i = 0; i < amount; i++) {
      yield () => this.clicked(i);
    }
  }

  clicked(buttonIndex) {
    if (this.lastPressed === undefined) {
      console.log(`Button ${buttonIndex} clicked!`)
      this.lastPressed = buttonIndex;
      return;
    }
    
    if (this.gameboard.moveCells(this.lastPressed, buttonIndex)) {
      this.gamedisplay.updateBoard(this.gameboard.board);
    }
    
    console.log(`Buttons ${this.lastPressed} and ${buttonIndex} clicked!`)
    this.lastPressed = undefined;
  }
}