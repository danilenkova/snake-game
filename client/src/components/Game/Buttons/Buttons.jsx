import React from "react";
import PropTypes from "prop-types";
import { ButtonsBox, Button } from "./Buttons.styled";

const Pause = ({ onClick }) => {
  return (
    <ButtonsBox>
      <Button type="button" onClick={onClick} id="Pause">
        Pause
      </Button>
      <Button type="button" onClick={onClick} id="Newstart">
        Restart
      </Button>
    </ButtonsBox>
  );
};

Pause.protoTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Pause;
