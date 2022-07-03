export function updateBoard(newBoard) {
  let field = document.getElementsByClassName("game-field")[0];
  newBoard.forEach(row => {
    row.forEach(cell => {
      field.innerHTML += `<button class="game-button"></button>`
    })
  });
}