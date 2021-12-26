import React from "react";
import PropTypes from "prop-types";
import Snake from "../Snake/Snake";
import Feed from "../Feed/Feed";

const GameBox = ({ snakeDots, dot, color }) => {
  return (
    <div className="game-box">
      <Snake snakeDots={snakeDots} />
      <Feed dot={dot} color={color} />
    </div>
  );
};

GameBox.protoTypes = {
  snakeDots: PropTypes.array.isRequired,
  dot: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default GameBox;
