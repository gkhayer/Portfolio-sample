import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container center">
        <h1>404 Page not found</h1>
        <h2>Sorry, This page doesn't exist</h2>
        <NavLink to="/">Homepage</NavLink>
      </div>
    </>
  );
};

export default Error;
