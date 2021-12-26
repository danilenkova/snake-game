import React from "react";
import PropTypes from "prop-types";
import { GameInfo, InfoData } from "./Info.styled";

const Info = ({ name, score }) => {
  return (
    <GameInfo>
      <InfoData>Name: {name}</InfoData>
      <InfoData>Score: {score}</InfoData>
    </GameInfo>
  );
};

Info.protoTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default Info;
