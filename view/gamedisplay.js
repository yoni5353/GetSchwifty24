export class GameDisplay {
  constructor() {
    this.buttons = [];
    this.field = document.getElementsByClassName("game-field")[0];
  }
  
  createBoard(newBoard, buttonMethodGenerator) {
    this.#initField(newBoard.length);
    let buttonIndexCounter = 0;
    newBoard.forEach(row => {
      row.forEach(cell => {
        let button = document.createElement("button");
        button.className = "game-button";
        setButtonContent(button, cell)
        button.index = buttonIndexCounter++;
        button.addEventListener("click", buttonMethodGenerator.next().value);
        this.field.appendChild(button);
        this.buttons.push(button)
      })
    });
  }
  
  updateBoard(newBoard) {
    let buttonIndexCounter = 0;
    newBoard.forEach(row =>{
      row.forEach(cell => {
        setButtonContent(this.buttons[buttonIndexCounter++], cell);
      })
    })
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
  }

  #initField(size) {
    while (this.field.hasChildNodes()) {
      this.field.removeChild(this.field.lastChild);
    }
    this.field.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
}

function setButtonContent(button, buttonIndex) {
  button.innerText = buttonIndex != 0 ? buttonIndex : "";
}