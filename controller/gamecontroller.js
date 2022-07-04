export class SchwiftyController {
  constructor(view, board, logger) {
    this.gamedisplay = view;
    this.gameboard = board;
    this.logger = logger;
    this.lastPressed = undefined;
    this.currentGameWon = false;
  }
  
  startGame() {
    this.gamedisplay.initStartGameButton((size) => this.startBoard(size));
  }

  startBoard(size) {
    this.currentGameWon = false;
    this.gameboard.initBoard(size);
    this.gamedisplay.createBoard(this.gameboard.board, this.#gameButtonMethodGenerator(size * size));
  }

  * #gameButtonMethodGenerator(amount) {
    for (let i = 0; i < amount; i++) {
      yield () => this.#clicked(i);
    }
  }

  #clicked(buttonIndex) {
    this.logger.log(`Button[${buttonIndex}] clicked!`)
    this.#slideModeClick(buttonIndex)
  }

  #slideModeClick(buttonIndex) {
    if (this.gameboard.slideCell(buttonIndex)) {
      this.gamedisplay.updateBoard(this.gameboard.board);
    }

    if (this.gameboard.victory && !this.currentGameWon) {
      this.currentGameWon = true;
      this.gamedisplay.declareVictory();
      this.logger.log(`VICTORY!`)
    }
  }

  #switchModeClick(buttonIndex) {
    if (this.lastPressed === undefined) {
      this.lastPressed = buttonIndex;
      this.gamedisplay.buttonSelected(buttonIndex);
      return;
    }
    
    this.gamedisplay.unselectButtons(buttonIndex);
    
    if (this.gameboard.switchCells(this.lastPressed, buttonIndex)) {
      this.gamedisplay.updateBoard(this.gameboard.board);
    }

    if (this.gameboard.victory) {
      this.gamedisplay.declareVictory();
      this.logger.log(`VICTORY!`)
    }
    
    this.logger.log(`Buttons ${this.lastPressed} and ${buttonIndex} clicked!`)
    this.lastPressed = undefined;
  }
}
