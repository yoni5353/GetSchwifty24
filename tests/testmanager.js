import { GameBoardTests } from "./gameboardtests.js";

export class Tests {
  constructor() {
    this.tests = [new GameBoardTests()];
  }
  
  runAlltests() {
    let failedTestsArrays = [];
    this.tests.forEach(testClass => failedTestsArrays.push(this.#runTests(testClass)));
    return failedTestsArrays.flat();
  }

  #runTests(testClass) {
    let failedTests = []
    for (let func of Object.getOwnPropertyNames(Object.getPrototypeOf(testClass))) {
      if (func.startsWith("test_")) {
        if (!testClass[func]()) {
          failedTests.push(func);
        }
      }
    }
    return failedTests;
  }
}
