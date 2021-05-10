//use effect does  not work with class component

import React, { useState, useEffect } from "react";

const CheckAlertOnButtons = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
   // console.log("testing effects")
  }, [num]);  // using [] it would only work on num

  return (
    <>
      <h1 className="heading_style">📓 Use Effect 📓</h1>
      <div className="container center">
        <button className="hooks__button" onClick={() => setNum(num + 1)}>{`Button 1 ${num}`}</button>
        <br/>
        <br/>
        <button className="hooks__button" onClick={() => setNum2(num2 + 1)}>Button 2 {num2}</button>
      </div>
    </>
  );
};

export default CheckAlertOnButtons;
