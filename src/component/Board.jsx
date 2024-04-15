import React from 'react'
import Square from './Square'
import './Board.css'


export default function Board({board,onClick}) {
  return (
   <div className='board_container'>
    {board.map((value,idx)=>{
       return ( <Square value={value} onClick={()=> value === null && onClick(idx)}/>)
   })}</div>
  )
}

