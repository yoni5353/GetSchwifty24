import { verifySolvable, boardIndexToPos, checkVictory } from "../model/gameboard.js";

export class TestGameBoard {
  runTests() {
    let results = [
      verifySolvable([[6, 0, 7], [3, 2, 8], [4, 5, 1]]),
      !verifySolvable([[2, 4, 7], [6, 0, 1], [3, 8, 5]]),
      verifySolvable([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 0, 15], [13, 14, 12, 11]]),
      boardIndexToPos(0, 3)[0] == 0 && boardIndexToPos(0, 3)[1] == 0,
      boardIndexToPos(4, 3)[0] == 1 && boardIndexToPos(4, 3)[1] == 1,
      boardIndexToPos(7, 3)[0] == 1 && boardIndexToPos(7, 3)[1] == 2,
      checkVictory([[1, 2, 3], [4, 5, 6], [7, 8, 0]]),
      !checkVictory([[1, 2, 0], [3, 4, 5], [6, 7, 8]]),
      !checkVictory([[6, 0, 7], [3, 2, 8], [4, 5, 1]]),
    ];
    return results.every(r => r);
  }
}
