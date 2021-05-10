import React, { useState } from "react";

const fetchApi = "https://jsonplaceholder.typicode.com/todos/";
const getItems = () => 
  fetch(fetchApi).then((res) => res.json());

const GetDataFromApi = () => {
  const [items, setItems] = useState();

  const handleClick = () => {
    getItems().then((data) => setItems(data))
  };

let itemsToRender;

  if (items) {
      itemsToRender = items.map((item) => {
          return <div key={item.id}>{item.title}</div>
      })
  } else {
      itemsToRender="click the above button to start.."
  }
  return (
    <>
      <h1 className="heading_style">❤️ React API calls ❤️</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="hooks__button" onClick={handleClick}>
              Get JSON data
            </button>
            <div className="apidata">{itemsToRender}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDataFromApi;
