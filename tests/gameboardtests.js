import { verifySolvable, boardIndexToPos, checkVictory } from "../model/gameboard.js";

export class GameBoardTests {
  test_verifySolvable() {
    return verifySolvable([[6, 0, 7], [3, 2, 8], [4, 5, 1]]) &&
      !verifySolvable([[2, 4, 7], [6, 0, 1], [3, 8, 5]]) &&
      verifySolvable([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 0, 15], [13, 14, 12, 11]]);
  }

  test_boardIndexToPos() {
    return this.#posEquals(boardIndexToPos(0, 3), [0, 0]) &&
    this.#posEquals(boardIndexToPos(4, 3), [1, 1]) &&
    this.#posEquals(boardIndexToPos(7, 3), [1, 2]);
  }

  test_checkVictory() {
    return checkVictory([[1, 2, 3], [4, 5, 6], [7, 8, 0]]) &&
    !checkVictory([[1, 2, 0], [3, 4, 5], [6, 7, 8]]) &&
    !checkVictory([[6, 0, 7], [3, 2, 8], [4, 5, 1]]);
  }

  #posEquals(pos1, pos2) {
    return pos1[0] == pos2[0] && pos1[1] == pos2[1];
  }
}
