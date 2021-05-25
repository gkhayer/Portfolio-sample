import React, { useEffect, useState } from "react";
import Cards from "../useeffectHooksFetchApi/Cards"

const UseEffectApi = () => {
  const [users, setuser] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    setuser(await response.json());
   // console.log(response.json())
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>List of random users</h2>
      <div className="container">
        <div className="row text-center">
          {users.map((currentEle) => {
            return (
              <Cards key = {currentEle.id} data={currentEle}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
