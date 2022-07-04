export class GameDisplay {
  constructor() {
    this.buttons = [];
    this.fieldElement = document.getElementsByClassName("game-field")[0];
    this.boardsizeInput = document.getElementById("boardsize-input");
    this.startgameButton = document.getElementById("startgame-button");
    this.victoryLabel = document.getElementById("victory-label");
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
      button.className = "game-button";
      setButtonContent(button, cell)
      button.index = buttonIndexCounter++;
      button.addEventListener("click", buttonMethodGenerator.next().value);
      this.fieldElement.appendChild(button);
      this.buttons.push(button)
    }
  }
  
  updateBoard(newBoard) {
    let buttonIndexCounter = 0;
    for (let cell of newBoard.flat()) { 
      setButtonContent(this.buttons[buttonIndexCounter++], cell);
    }
  }

  buttonSelected(buttonIndex) { 
    for (let i = 0; i < this.buttons.length; i ++) {
      this.buttons[i].className = i == buttonIndex ? "game-button-selected" : "game-button";
    }
  }

  unselectButtons() {
    for (let button of this.buttons) {
      button.className = "game-button";
    }
  }

  onVictory() {
    this.#toggleVictoryLabel(true);
  }

  #initField(size) {
    this.buttons = [];
    while (this.fieldElement.hasChildNodes()) {
      this.fieldElement.removeChild(this.fieldElement.lastChild);
    }
    this.fieldElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }

  #toggleVictoryLabel(bool) {
    this.victoryLabel.style.visibility = bool ? "visible" : "hidden";
  }
}

function setButtonContent(button, buttonIndex) {
  button.innerText = buttonIndex != 0 ? buttonIndex : "";
}
