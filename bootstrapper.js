import { hello } from "./model/board.js";

function main() {
    console.log(hello())
    let field = document.getElementsByClassName("game-field")[0];
}

main();