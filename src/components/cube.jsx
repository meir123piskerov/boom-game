import React from 'react'
import '../style/cube.css'
function Cube({onClick}) {
  return (
    <div className='cube' onClick={onClick}></div>
  )
}

export default Cube