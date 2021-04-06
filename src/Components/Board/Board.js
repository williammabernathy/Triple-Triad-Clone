import React, { useState } from "react";
import "./Board.css";

const Board = () => {
  // gridPos = 3x3 array
  // null until update with a player based on owned tile
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
  );
  const [playersTurn, setPlayersTurn] = useState(null); // which player's turn is it
  const [winner, setWinner] = useState(null); // who's the winner

  // determine which player goes first
  const setFirstTurnPlayer = () => {
    setPlayersTurn(Math.floor(Math.random() * 2) + 1);
  };

  // checks if the move is legal
  // if so, updates board by checking TT rules (flip adjacent, etc)
  const checkMove = () => {
    checkAdjacent();
  };

  // called in conjunction with checkMove
  const checkAdjacent = () => {
    updateGameBoardGrid();
  };

  // updates the gameboard state regarding if a row-column is empty or not
  const updateGameBoardGrid = () => {
    //setGrid();
    checkIfBoardFull();
  };

  // checks if the board is full. if so, claims a winner
  const checkIfBoardFull = () => {
    // if board full then..
    declareWinner();
    // else, play another turn
  };

  // called if board is full, declares a winner, and presents option
  // to reset board and play again
  const declareWinner = () => {
    //setWinner();
  };

  // final function called to reset the game post winner declared
  const resetGame = () => {
    setGrid(
      Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
    );
    setPlayersTurn(null);
    setWinner(null);
  };

  return <div></div>;
};

export default Board;
