import { Board } from "./model/board.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { startGame } from "./controller/gamecontroller.js"

function bootstrap() {
  startGame(new GameDisplay(), new Board(3, 3));
}

bootstrap();
