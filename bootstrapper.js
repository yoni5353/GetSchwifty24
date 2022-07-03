import { Board } from "./model/board.js";

function main() {
    let x = new Board(3, 3)
    console.log(x.board)
    let field = document.getElementsByClassName("game-field")[0];
}

main();