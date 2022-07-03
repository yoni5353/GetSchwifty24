export function createBoard(newBoard) {
  let field = document.getElementsByClassName("game-field")[0];
  newBoard.forEach(row => {
    row.forEach(cell => {
      let button = document.createElement("button");
      button.className = "game-button";
      button.innerText = cell;
      field.appendChild(button);
    })
  });
}