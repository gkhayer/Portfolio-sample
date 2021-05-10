import React from "react";

const Searchresult = (props) => {

    const img = `https://source.unsplash.com/400x400/?${props.apiData}`
  return (
    <>
      <div className="container center searchBar">
        <img  src={img} alt="Random Images"/>
      </div>
    </>
  );
};

export default Searchresult;
