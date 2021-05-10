import React, { createContext } from "react";
import Child1 from "./Child1";

const FirstName = createContext();
const LastName = createContext();

const Parent = () => {
  return (
    <>
    <h1 className="heading_style">📓 Use Context 📓</h1>
      <FirstName.Provider value={"Girl"}>
        <LastName.Provider value={"Kaur"}>
          <Child1 />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};

export default Parent;
export { FirstName, LastName };
