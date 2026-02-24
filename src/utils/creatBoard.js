  import { randomNum } from "./randomBoard";
  export function  createBoard() {
    const board = [];
    const randomIndexes = randomNum();
    for (let i = 0; i < 80; i++) {
      if (randomIndexes.includes(i)) {
        board.push("bomb");
      } else {
        board.push("x");
      }
    }
    return board;
  }