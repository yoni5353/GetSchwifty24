export function startGame(view, board) {
  let gamedisplay = view;
  let gameboard = board;

  gamedisplay.createBoard(gameboard.board);

  for (let button of gamedisplay.buttons) {
    button.addEventListener("click", () => clicked(button.index))
  }
}

function clicked(buttonIndex) {
  console.log(`Button ${buttonIndex} clicked!`)
}
