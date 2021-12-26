import React from "react";

const Info = (props) => {
  return (
    <div className="gameInfo">
      <p className="userName">Name: {props.name}</p>
      <p className="score">Score: {props.score}</p>
    </div>
  );
};

export default Info;
