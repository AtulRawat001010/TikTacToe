import { useState } from 'react';
import './App.css';
import Square from './components/Square'

function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);


  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }


  function handleClick(i) {
    if(square[i] || calculateWinner(square)) {
      return;
    }

    const nextSquare = square.slice();
    
    if(xIsNext) {
      nextSquare[i] = '✖️';
    }
    else{
      nextSquare[i] = '⭕';
    }
    setSquare(nextSquare);
    setxIsNext(!xIsNext);
  }








  function clickHandler() {
    setSquare([]);
  }







  const winner = calculateWinner(square);
  let status;

  if(winner) {
    status = 'Winner: ' + winner;
  }
  else {
    status = 'Next Player: ' + (xIsNext ? '✖️' : '⭕');
  }


  return (
    <div className='board'>
      <div>{status}</div>
      <div className='board-rows'>
        <div id='row1'>
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
      <div id='row2'>
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div id='row3'>
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
    <div className='resetBtn'>
        <p onClick={clickHandler}>Reset</p>
    </div>
    </div>
  );
}

export default Board;
