import { Button } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from '@material-ui/icons/Remove';
import Tooltip from "@material-ui/core/Tooltip";

const CounterRH = () => {
  const [count, counterEvent] = useState(0);

  const IncrementClickHandler = () => {
    counterEvent(count + 1);
  };

  const DecrementClickHandler = () => {
    if (count <= 0) {
      counterEvent(0);
     // alert("Minimum limit is 0")
    } else {
      counterEvent(count - 1);
    }
  };

  return (
    <>
      <h1 className="heading_style">Counter 🕥</h1>
      <div className="main-div">
        <div className="listCard">
          <h1 className="todoHeading">{count}</h1>
          <Tooltip title="Increment">
            <Button className="btn-green" onClick={IncrementClickHandler}>
              <AddIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Decrement">
            <Button className="btn-red" onClick={DecrementClickHandler}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default CounterRH;
