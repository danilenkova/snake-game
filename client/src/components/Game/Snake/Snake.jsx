import React from "react";
import PropTypes from "prop-types";
import { SnakeBody } from "./Snake.styled";

const Snake = ({ snakeDots }) => {
  return (
    <div>
      {snakeDots.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
        };
        return <SnakeBody key={i} style={style}></SnakeBody>;
      })}
    </div>
  );
};

Snake.protoTypes = {
  snakeDots: PropTypes.array.isRequired,
};

export default Snake;
