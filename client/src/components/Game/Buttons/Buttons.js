import React from "react";
import PropTypes from "prop-types";

const Pause = ({ onClick }) => {
  return (
    <div className="buttonsBox">
      <button type="button" onClick={onClick} className="pauseBtn" id="Pause">
        Pause
      </button>
      <button
        type="button"
        onClick={onClick}
        className="pauseBtn"
        id="Newstart"
      >
        Restart
      </button>
    </div>
  );
};

Pause.protoTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Pause;
