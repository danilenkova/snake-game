import React from "react";
import PropTypes from "prop-types";
import LeaderBoardUser from "./LeaderBoardUser";

const Leaderboard = ({ board }) => {
  const sortByScore = (a, b) => b.score - a.score;
  let topLeaders = board.sort(sortByScore);
  return (
    <ul className="leaderboard">
      {topLeaders.slice(0, 5).map(({ id, name, score }) => {
        return <LeaderBoardUser key={id} name={name} score={score} />;
      })}
    </ul>
  );
};

Leaderboard.protoTypes = {
  board: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default Leaderboard;
