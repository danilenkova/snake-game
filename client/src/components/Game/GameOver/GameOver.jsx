import React from "react";
import PropTypes from "prop-types";
import {
  GameOverBox,
  Title,
  Exit,
  GameScore,
  Restart,
} from "./GameOver.styled";
import Leaderboard from "./Leaderboard/Leaderboard";

const GameOver = ({ onClick, score, board }) => {
  return (
    <GameOverBox>
      <Title>Game Over</Title>
      <Exit type="button" onClick={onClick} id="Exit">
        Exit
      </Exit>
      <GameScore>Your score: {score}</GameScore>
      <Restart type="button" onClick={onClick} id="Restart">
        Try again
      </Restart>
      <Leaderboard board={board} />
    </GameOverBox>
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
