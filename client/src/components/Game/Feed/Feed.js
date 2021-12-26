import React from "react";
import PropTypes from "prop-types";

const Feed = ({ dot, color }) => {
  const style = {
    left: `${dot[0]}%`,
    top: `${dot[1]}%`,
    backgroundColor: `${color}`,
  };
  return <div className="snake-feed" style={style}></div>;
};

Feed.protoTypes = {
  dot: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
};

export default Feed;
