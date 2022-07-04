import { GameBoard } from "./model/gameboard.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { SchwiftyController } from "./controller/controller.js";
import { Tests } from "./tests/testmanager.js"

var runTests = true;

function bootstrap() {
  if (runTests) {
    let failedTests = new Tests().runAlltests();
    console.log(failedTests.length == 0 ? "All tests passed" : "Failed Tests:", failedTests);
  }

  let controller = new SchwiftyController(new GameDisplay(), new GameBoard());
  controller.startGame();
}

bootstrap();
