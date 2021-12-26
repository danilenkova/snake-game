import React from "react";
import PropTypes from "prop-types";
import { Box } from "./GameBox.styled";
import Snake from "../Snake/Snake";
import Feed from "../Feed/Feed";

const GameBox = ({ snakeDots, dot, color }) => {
  return (
    <Box>
      <Snake snakeDots={snakeDots} />
      <Feed dot={dot} color={color} />
    </Box>
  );
};

GameBox.protoTypes = {
  snakeDots: PropTypes.array.isRequired,
  dot: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default GameBox;
