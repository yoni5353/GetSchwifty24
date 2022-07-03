import { verifySolvable } from "../model/gameboard.js";

export class TestGameBoard {
  runTests() {
    let results = [
      verifySolvable([[6, 0, 7], [3, 2, 8], [4, 5, 1]]),
      !verifySolvable([[2, 4, 7], [6, 0, 1], [3, 8, 5]]),
      verifySolvable([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 0, 15], [13, 14, 12, 11]])
    ];
    return results.every(r => r);
  }
}
