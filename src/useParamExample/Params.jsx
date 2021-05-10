import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom"; // new way

const Params = () => {
  const { anyname, anyOtherName } = useParams();
  const location = useLocation();
  const history = useHistory();
  const handleClick = () => {
    var showDataAfterClickid = document.getElementById("showDataAfterClick");
    showDataAfterClickid.innerHTML = "You did it!!!"

  };

  
  return (
    <div
      className="container center"
      style={{ fontSize: "1.5rem", marginTop: "2rem" }}
    >
      <h5 style={{ color: "green" }}>Old Way</h5>
      <p>
        Hi. This is a example of params, where we pass "name" 📛 throught url
      </p>
      <p>
        Value passed in url is
        <span style={{ color: "blue", textTransform: "capitalize" }}>
          {/* {match.params.anyname} */}
        </span>
      </p>
      <h5 style={{ color: "green" }}>New Way</h5>
      {/* remove match from the component argument and do const anyname = useParams()*/}
      <p>This is by using useParams.</p>
      <p>
        The value passed to the url is:
        <span style={{ color: "red", textTransform: "capitalize" }}>
          {anyname} {anyOtherName}
        </span>
      </p>
      <h4>useLocation example</h4>
      <p>UseLocation mostly used to get current URL path</p>
      <p>My current location is {location.pathname}</p>
      <div>
        <h3 style={{ color: "White", backgroundColor: "black", padding: '10px'}}>
          Next task is to show button if URL contain name "Gagan"
        </h3>
        <section>{location.pathname === `/params/gagan/hayer` ? <button onClick={handleClick}>test</button> : "Url not matched"}</section>
        <p id="showDataAfterClick"></p>
      </div>
      <div>
      <h5>useHistory example</h5>
      <p>Click below button to get previous URL:</p>
      <button onClick={ () => history.goBack()}>Go Back</button>
      </div>
    </div>
  );
};

export default Params;
