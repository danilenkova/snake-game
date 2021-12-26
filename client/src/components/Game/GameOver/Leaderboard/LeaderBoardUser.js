import React from "react";

const LeaderBoardUser = ({ name, score }) => {
  return (
    <li>
      <span>{name}</span>: {score}
    </li>
  );
};

export default LeaderBoardUser;
