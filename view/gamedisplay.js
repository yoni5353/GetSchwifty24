export class GameDisplay {
  constructor() {
    this.buttons = [];
    this.field = document.getElementsByClassName("game-field")[0];
  }
  
  createBoard(newBoard) {
    let buttonIndexCounter = 0;
    newBoard.forEach(row => {
      row.forEach(cell => {
        let button = document.createElement("button");
        button.className = "game-button";
        button.innerText = cell;
        button.index = buttonIndexCounter++;
        this.field.appendChild(button);
        this.buttons.push(button)
      })
    });
  }
  
  updateBoard(newBoard) {
    let buttonIndexCounter = 0;
    newBoard.forEach(row =>{
      row.forEach(cell => {
        this.buttons[buttonIndexCounter++].innerText = cell;
      })
    })
  }
}