import React, { useState } from "react";
import "./Board.css";

function Board(props) {
  const { board, handleClick } = props;
  const [isXTurn, setIsXTurn] = useState(true);

  const handleSquareClick = (index) => {
    if (board[index] === null) {
      handleClick(index);
      setIsXTurn(!isXTurn);
    }
  };

  const renderSquare = (index) => {
    return (
      <div className="square" onClick={() => handleSquareClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
