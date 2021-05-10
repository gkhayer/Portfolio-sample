import React from "react";
import logo from "./Images/istockphoto-95213582-170667a.jpg";

const NotesHeader = () => {
  return (
    <>
      <div className="container-fluid notes_header">
        <div className="row">
          <div className="col-sm">
            <img
              src={logo}
              width="56.6"
              height="50"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="col-sm">Notes</div>
        </div>
      </div>
    </>
  );
};

export default NotesHeader;
