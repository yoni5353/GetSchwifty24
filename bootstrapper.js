import { GameBoard } from "./model/gameboard.js";
import { GameDisplay } from "./view/gamedisplay.js";
import { SchwiftyController } from "./controller/controller.js";
import { Tests } from "./tests/testmanager.js"
import { ConsoleLogger } from "./common/consolelogger.js";
import { settings } from "./settings.js";
import { ObjectConfigReader } from "./common/configreader.js";

function bootstrap() {
  let configReader = new ObjectConfigReader(settings);
  let runTests = configReader.get("appSettings", "precedeWithTests");

  let logger = new ConsoleLogger();

  if (runTests) {
    let failedTests = new Tests().runAlltests();
    logger.log(failedTests.length == 0 ? "All tests passed" : "Failed Tests:", failedTests);
  }

  let controller = new SchwiftyController(new GameDisplay(), new GameBoard(), logger);
  controller.startGame();
}

bootstrap();
