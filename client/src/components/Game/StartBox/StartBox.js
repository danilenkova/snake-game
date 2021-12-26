import React from "react";

const StartBox = (props) => {
  return (
    <div className="start-box">
      <h2 className="title">Snake Game</h2>
      <form className="startForm" onSubmit={props.onClick}>
        <p className="startForm__title">Please enter your name</p>

        <input
          type="text"
          placeholder="Enter name"
          onChange={props.onChange}
        ></input>
        <button type="button" onSubmit={props.onClick} className="startButton">
          Start game
        </button>
      </form>
    </div>
  );
};

export default StartBox;
