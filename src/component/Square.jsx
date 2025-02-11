import React from 'react'
import './Square.css'

export default function Square({value,onClick}) {
    const style = value==="X"?"square x" :"square o";
    return (
      <button className={style} onClick={onClick}>{value}</button>
    )
}
