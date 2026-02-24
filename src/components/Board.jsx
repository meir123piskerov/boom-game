import React, { useEffect, useState } from 'react'
import '../style/board.css'
import Cube from './cube'

function Board() {
  const [cubeList, setCubeList] = useState([])

  function randomNum() {
    const bombIndex = []
    for (let i = 0; i < 10;) {
      const randomPlace = Math.floor(Math.random() * 80)
      if (!(bombIndex.includes(randomPlace))) {
        bombIndex.push(randomPlace)
        i++
      }
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
    <div className='game-board'>
      <div className="board">
        {cubeList.map((item) => {
          return (<Cube name={item} />)
        })}

      </div>

    </div>
  )
}

export default Board