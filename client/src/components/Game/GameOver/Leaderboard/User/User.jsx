import React from 'react';
import PropTypes from 'prop-types';
import { UserData, Name } from './User.styled';

const User = ({ name, score }) => {
  return (
    <UserData>
      <Name>{name}</Name> {score}
    </UserData>
  );
};

User.protoTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default User;
