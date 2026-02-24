import React from "react";

function Board() {
  function createBord() {
    const number1 = Math.floor(Math.random() * 100);
    let list = [];
    for (let i = 0; i < 100; i++) {
      if (i === number1) {
        list.push("💣");
      } else {
        list.push("❌");
      }
    }
    return list;
  }

  return <div></div>;
}

export default Board;
