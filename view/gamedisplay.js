const BUTTON_CLASS = "game-button";
const SELECTED_BUTTON_CLASS = "game-button-selected";
const FIELD_CLASS = "game-field";
const BOARDSIZE_INPUT = "boardsize-input";
const STARTGAME_BUTTON = "startgame-button";
const VICTORY_LABEL = "victory-label";

export class GameDisplay {
  constructor() {
    this.buttons = [];
    this.fieldElement = document.getElementsByClassName(FIELD_CLASS)[0];
    this.boardsizeInput = document.getElementById(BOARDSIZE_INPUT);
    this.startgameButton = document.getElementById(STARTGAME_BUTTON);
    this.victoryLabel = document.getElementById(VICTORY_LABEL);
  }
  
  initStartGameButton(startBoardMethod) {
    this.startgameButton.addEventListener("click", () => startBoardMethod(this.boardsizeInput.value));
  }

  createBoard(newBoard, buttonMethodGenerator) {
    this.#toggleVictoryLabel(false);
    this.#initField(newBoard.length);
    let buttonIndexCounter = 0;
    for (let cell of newBoard.flat()) {
      let button = document.createElement("button");
      button.className = BUTTON_CLASS;
      this.#setButtonContent(button, cell);
      button.addEventListener("click", buttonMethodGenerator.next().value);
      this.fieldElement.appendChild(button);
      this.buttons.push(button);
    }
  }
  
  updateBoard(newBoard) {
    let buttonIndexCounter = 0;
    for (let cell of newBoard.flat()) { 
      this.#setButtonContent(this.buttons[buttonIndexCounter++], cell);
    }
  }

  buttonSelected(buttonIndex) { 
    for (let i = 0; i < this.buttons.length; i ++) {
      this.buttons[i].className = i == buttonIndex ? SELECTED_BUTTON_CLASS : BUTTON_CLASS;
    }
  }

  unselectButtons() {
    for (let button of this.buttons) {
      button.className = BUTTON_CLASS;
    }
  }

  declareVictory() {
    this.#toggleVictoryLabel(true);
  }

  #initField(size) {
    this.buttons = [];
    while (this.fieldElement.hasChildNodes()) {
      this.fieldElement.removeChild(this.fieldElement.lastChild);
    }
    this.fieldElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

  #setButtonContent(button, buttonIndex) {
    button.innerText = buttonIndex != 0 ? buttonIndex : "";
  }

  #toggleVictoryLabel(bool) {
    this.victoryLabel.style.visibility = bool ? "visible" : "hidden";
  }
}
