import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  BoxTitle,
  Form,
  FormTitle,
  FormInput,
  StartBtn,
} from "./StartBox.styled";

const StartBox = ({ onClick, onChange }) => {
  return (
    <Box>
      <BoxTitle>Snake Game</BoxTitle>
      <Form onSubmit={onClick}>
        <FormTitle>Please enter your name</FormTitle>

        <FormInput
          type="text"
          placeholder="Enter name"
          onChange={onChange}
        ></FormInput>
        <StartBtn type="button" onSubmit={onClick}>
          Start game
        </StartBtn>
      </Form>
    </Box>
  );
};

StartBox.protoTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default StartBox;
