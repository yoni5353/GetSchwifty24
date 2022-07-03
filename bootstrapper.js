import { GameBoard } from "./model/gameboard.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { startGame } from "./controller/controller.js"

function bootstrap() {
  startGame(new GameDisplay(), new GameBoard(3, 3));
}

bootstrap();
