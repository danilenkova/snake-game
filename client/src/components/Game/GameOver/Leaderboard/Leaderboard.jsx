import React from 'react';
import PropTypes from 'prop-types';
import User from './User/User';
import { UsersList } from './Leaderboard.styled';

const Leaderboard = ({ board }) => {
  const sortByScore = (a, b) => b.total - a.total;
  let topLeaders = board.sort(sortByScore);
  return (
    <UsersList>
      {topLeaders.slice(0, 5).map(({ _id, name, total }) => {
        return <User key={_id} name={name} score={total} />;
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
