import React, { useState } from "react";
import Searchresult from './Searchresult';

const SearchFilter = () => {
  const [inputData, setinputData] = useState("");

  const handleSearch = (event) => {
    const data = event.target.value;
    setinputData(data);
  };
  return (
    <>
      <div className="container center searchBar">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
          value={inputData}
        />
        {
            inputData !== "" ? <Searchresult apiData = {inputData}/> : null
        }
        
      </div>
    </>
  );
};

export default SearchFilter;
