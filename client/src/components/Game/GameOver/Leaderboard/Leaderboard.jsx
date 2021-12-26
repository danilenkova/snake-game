import React from "react";
import PropTypes from "prop-types";
import User from "./User/User";
import { UsersList } from "./Leaderboard.styled";

const Leaderboard = ({ board }) => {
  const sortByScore = (a, b) => b.score - a.score;
  let topLeaders = board.sort(sortByScore);
  return (
    <UsersList>
      {topLeaders.slice(0, 5).map(({ id, name, score }) => {
        return <User key={id} name={name} score={score} />;
      })}
    </UsersList>
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
