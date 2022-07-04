import { TestGameBoard } from "./gameboardtests.js";

export class Tests {
  constructor() {
    this.tests = [new TestGameBoard()];
  }
  
  runAlltests() {
    return this.tests.every(t => t.runTests());
  }
}
