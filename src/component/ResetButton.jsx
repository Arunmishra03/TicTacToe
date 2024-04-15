import React from 'react'
import './ResetButton.css'

export default function ResetButton({resetGame}) {
  return (
    <button className="reset_btn" onClick={resetGame}>Reset</button>
  )
}
