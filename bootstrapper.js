import { GameBoard } from "./model/gameboard.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { SchwiftyController } from "./controller/controller.js";

function bootstrap() {
  let controller = new SchwiftyController(new GameDisplay(), new GameBoard(3, 3));
  controller.startGame();
}

bootstrap();
