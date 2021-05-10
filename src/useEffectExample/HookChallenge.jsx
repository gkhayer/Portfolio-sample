import React, { useState, useEffect } from "react";

const HookChallenge = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const newTitle = `You clicked me ${num} times`;

    document.title = newTitle;
  }, [num]);

  return (
    <>
      <h1 className="heading_style">❤️ hook Challenge ❤️</h1>
      <div className="container">
        <div className="row">
          <div className="col center">
            <button className="hooks__button" onClick={() => setNum(num + 1)}>
              Update Title {num}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HookChallenge;
