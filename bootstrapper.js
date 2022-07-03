import { GameBoard } from "./model/gameboard.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { SchwiftyController } from "./controller/controller.js";
import { Tests } from "./tests/testmanager.js"

var runTests = true;

function bootstrap() {
  if (runTests){
    console.log("All tests passed:", new Tests().runAlltests());
  }

  let controller = new SchwiftyController(new GameDisplay(), new GameBoard(3));
  controller.startGame();
}

bootstrap();
