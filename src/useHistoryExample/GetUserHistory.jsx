import React from "react";
import { useHistory } from "react-router-dom";

const GetUserHistory = () => {
  const history = useHistory();
  return (
    <>
      <div className="container center">
        <section>
          useHistory is somethng we can use to get history of previously visited
          urls
        </section>
        <section>
          <p>
            You can also use push() instead of goBack() to go to a particular URL/Component
          </p>
          <p style={{color: 'blueviolet'}}>Visit our ADD item page: </p>
          <button onClick = {() => history.push('/todo')}>Todopage</button>
        </section>
      </div>
    </>
  );
};

export default GetUserHistory;
