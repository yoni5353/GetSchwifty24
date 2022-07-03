var buttons = []
var field = document.getElementsByClassName("game-field")[0];

export function createBoard(newBoard) {
  let buttonIndexCounter = 0;
  newBoard.forEach(row => {
    row.forEach(cell => {
      let button = document.createElement("button");
      button.className = "game-button";
      button.innerText = cell;
      button.index = buttonIndexCounter++;
      field.appendChild(button);
      buttons.push(button)
    })
  });
  return buttons;
}

export function updateBoard(newBoard) {
  let buttonIndexCounter = 0;
  newBoard.forEach(row =>{
    row.forEach(cell => {
      buttons[buttonIndexCounter++].innerText = cell;
    })
  })
}