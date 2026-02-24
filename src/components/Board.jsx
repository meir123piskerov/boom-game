import React, { useContext, useEffect } from "react";
import "../style/board.css";
import { ThemeProvider } from "../Provider/ContextProvider";
import Cube from "./cube";

function Board() {
  const { cubeList, setCubeList, bomb, setBomb } = useContext(ThemeProvider);
  function randomNum() {
    const bombIndex = [];
    for (let i = 0; i < 10; ) {
      const randomPlace = Math.floor(Math.random() * 80);
      if (!bombIndex.includes(randomPlace)) {
        bombIndex.push(randomPlace);
        i++;
      }
    }
    return bombIndex;
  }

  function createBoard() {
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

  function bombClick(e) {
    if (e.target.className !== "bomb") {
      e.target.className = "bomb";
      setBomb(bomb - 1);
      console.log(bomb);
    }
    console.log(e.target.className);
  }

  useEffect(() => {
    setCubeList(createBoard());
  }, []);

  return (
    <div className="game-board">
      <div className="board">
        {cubeList.map((item) => {
          return item === "x" ? (
            <Cube
              onClick={(e) => {
                e.target.className = "clear";
              }}
            />
          ) : (
            <Cube onClick={bombClick} />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
