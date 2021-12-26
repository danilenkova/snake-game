import React from "react";
import PropTypes from "prop-types";
import Leaderboard from "./Leaderboard/Leaderboard";

const GameOver = ({ onClick, score, board }) => {
  return (
    <div className="game-over">
      <h2 className="title game-over__title">Game Over</h2>
      <button type="button" onClick={onClick} id="Exit" className="exitButton">
        Exit
      </button>
      <p className="score">Your score: {score}</p>
      <form className="startForm">
        <button
          type="button"
          onClick={onClick}
          id="Restart"
          className="restartButton"
        >
          Try again
        </button>
        <Leaderboard board={board} />
      </form>
    </div>
  );
};

GameOver.protoTypes = {
  onClick: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  board: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default GameOver;
