import React, { useState } from "react";
import "./App.css";
import Board from "./Board/Board.jsx";
import Fireworks from "./Fireworks/Fireworks";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] === null && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBoard);
    }
  };

  const checkWinner = (board) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(player);
        break;
      }
    }
  };

  const renderBoard = () => {
    return board.map((cell, index) => (
      <div key={index} className="cell" onClick={() => handleClick(index)}>
        {cell}
      </div>
    ));
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board board={board} handleClick={handleClick} />

      {winner ? (
        <div>
          <h2>{winner} has won the game!</h2>
          <Fireworks />
          <button className="play-again-button" onClick={resetBoard}>
            Play again
          </button>
        </div>
      ) : (
        <>
          <h2>{player}'s turn</h2>
          <div className="board">{renderBoard()}</div>
        </>
      )}

      {winner ? (
        <button onClick={resetBoard} style={{ display: "none" }}>
          Reset game
        </button>
      ) : (
        <>
          <button className="reset-button" onClick={resetBoard}>
            Reset game
          </button>
        </>
      )}
    </div>
  );
}

export default App;
