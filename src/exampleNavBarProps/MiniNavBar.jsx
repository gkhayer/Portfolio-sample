import React from "react";
import { NavLink } from "react-router-dom";

const MiniNavBar = () => {
  return (
    <>
      <div className="container mini_nav_div">
        <NavLink exact activeClassName="active_class" className="mini_nav_Link" to="./MiniItem1">MiniItem1</NavLink>
        <NavLink exact activeClassName="active_class" className="mini_nav_Link" to="./MiniItem2">MiniItem2</NavLink>
        <NavLink exact activeClassName="active_class" className="mini_nav_Link" to="./MiniItem3">MiniItem3</NavLink>
      </div>
    </>
  );
};

export default MiniNavBar;
