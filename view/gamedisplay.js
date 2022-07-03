export function createBoard(newBoard) {
  let field = document.getElementsByClassName("game-field")[0];
  let buttonIdCounter = 0;
  let buttons = [];
  newBoard.forEach(row => {
    row.forEach(cell => {
      let button = document.createElement("button");
      button.className = "game-button";
      button.innerText = cell;
      button.id = buttonIdCounter++;
      field.appendChild(button);
      buttons.push(button)
    })
  });
  return buttons;
}