import { useState } from 'react'
import Board from './component/Board'
import ScoreBoard from './component/ScoreBoard'
import ResetButton from './component/ResetButton'



function App() {
  const [board, setboard] = useState(Array(9).fill(null))
  const[xPlaying,setxPlaying] = useState(true)
  const[xScore,setxScore] = useState(0)
  const[oScore,setoScore] =useState(0)
  const[gameOver,setgameOver] = useState(false)

  const winCondition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  const handleClick =(boxIdx)=>{
    const updatedBoard =board.map((value,idx)=>{
      if(idx ===boxIdx){
        return xPlaying ===true ?"X":"O";
      }
      else{
        return value;
      }
    })
    const winner = checkWinner(updatedBoard);
    if(winner){
      if(winner === "X"){
        setxScore(prevxScore=>prevxScore+1);
      }
      else{
        setoScore(prevoScore=>prevoScore+1);
      }
      
    }
    console.log(xScore,oScore);
    setboard(updatedBoard);
    setxPlaying(!xPlaying);
  }

  const checkWinner = (board)=>{
    for(let i=0;i<winCondition.length;i++){
      const[a,b,c] =winCondition[i];
      if(board[a] && board[a] ===board[b] && board[b] === board[c]){
        setgameOver(true)
        return board[a];
      }
    }
  }
  const resetGame = ()=>{
    setgameOver(false);
    setboard(Array(9).fill(null))
  }

  return (
    <>
    <ScoreBoard xScore={xScore} oScore={oScore} xPlaying={xPlaying}/>
      <Board board ={board} onClick={gameOver?resetGame:handleClick}/>
      <ResetButton resetGame={resetGame}/>
    </>
  )
}

export default App
