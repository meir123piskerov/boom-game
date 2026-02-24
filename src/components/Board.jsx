import React, { useContext, useEffect } from "react";
import "../style/board.css";
import { ThemeProvider } from "../Provider/ContextProvider";
import { createBoard } from "../utils/creatBoard";
import Cube from "./cube";

function Board() {
  const { cubeList, setCubeList, bomb, setBomb ,counter} = useContext(ThemeProvider);

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
        {cubeList.map((item,index) => {
          return item === "x" ? (
            <Cube key={index + counter}
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
