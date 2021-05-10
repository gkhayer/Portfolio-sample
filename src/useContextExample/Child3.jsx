import React, {useContext} from "react";
import { FirstName, LastName } from "./Parent";

const Child3 = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
 
  return (
    <>
        <h1 className="center">My full name is {fname} and last name is {lname}</h1>
    </>
  );
};

export default Child3;
