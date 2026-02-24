import React, { useEffect, useState } from 'react'

function Board() {
  const [cubeList, setCubeList] = useState([])

  function randomNum() {
    const bombIndex = []
    for (let i = 0; i < 10; i++) {
      const randomPlace = Math.floor(Math.random() * 80)
      bombIndex.push(randomPlace)
    }
    return bombIndex
  }
  function createBoard() {
    const board = []
    const randomIndexes = randomNum()
    for (let i = 0; i < 80; i++) {
      if (randomIndexes.includes(i)) {
        board.push("bomb")
      }
      else {
        board.push("x")
      }
    }
    return board
  }
  
  useEffect(() => {
    setCubeList(createBoard())
  }, [])


  return (
    <button onClick={()=>{console.log(cubeList);}}>click</button>
  )
}

export default Board