import React, { useState } from "react";
import "./styles.css";

const EventHandling = () => {
  let buttonValue = "Welcome";
  let bgColor = "pink";
  const [cValue, newValue] = useState(buttonValue);
  const [cbgColor, newBgColor] = useState(bgColor);

  const changeValue = () => {
    newValue("Welcome Again");
    newBgColor("#5A104D");
  };

  const changeValueAgain = () => {
    newValue(buttonValue);
    newBgColor(bgColor);
  };

  return (
    <>
      <div style={{ backgroundColor: cbgColor }} className="hooks__div">
        <button
          className="hooks__button"
          onMouseEnter={changeValue}
          onMouseLeave={changeValueAgain}
        >
          {cValue}
        </button>
      </div>
    </>
  );
};

export default EventHandling;
