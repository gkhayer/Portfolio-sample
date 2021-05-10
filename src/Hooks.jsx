//this.state is class based Component
// where as Hooks allows us to use state and
// other react features without writing a class.
// which make hooks as a functional component
// not inside class
// only on funcational level ; at top level only.

import React, { useState } from "react";

const Hooks = () => {
  // const state = useState()
  let timeNow = new Date().toTimeString();

  const [count, setCount] = useState(0);
  const [currentTime, setTime] = useState(timeNow);

  // usestate is a function that returns an array with 2 items;
  // 1st is state object :- current data,
  //2nd is updated value :- updated data;
  // usestate() inside is the initial value

  // current data, updated data = initial data

  const changeTime = () => {
    setTime(timeNow);
  };

  const IncNum = () => {
    setCount(count + 1);
  };

  const DecNum = () => {
    setCount(count - 1);
  };

  // return, returns to index.js
  return (
    <>
      <h1 className="heading_style">Digital Clock 🕥</h1>
      <div className="hooks__div">
        <h1>{count}</h1>
        <button className="hooks__button" onClick={IncNum}>
          Increment
        </button>
        <button className="hooks__button" onClick={DecNum}>
          Decrement
        </button>
        {/* Get time Challenge */}
        <h1>{currentTime}</h1>
        <button className="hooks__button" onClick={changeTime}>
          Get Current Time
        </button>
      </div>
    </>
  );
};

export default Hooks;
