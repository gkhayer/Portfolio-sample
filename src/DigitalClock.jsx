import React, { useState } from "react";

const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();
  const [cTime, uTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    uTime(time);
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <div className="container">
        <h1 className="heading_style center">Digital Clock 🕥</h1>
        <h1>{cTime}</h1>
      </div>
    </>
  );
};

export default DigitalClock;
