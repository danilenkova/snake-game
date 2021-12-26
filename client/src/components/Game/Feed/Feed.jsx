import React from "react";
import PropTypes from "prop-types";
import { Fruit } from "./Feed.styled";

const Feed = ({ dot, color }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
  };
  return <Fruit color={color} style={style}></Fruit>;
};

Feed.protoTypes = {
  dot: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default Feed;
