import React, { useState, useEffect } from "react";

const FilterWeather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const response = await await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e98c0ca8ef72349771e8cb9fc0a41e1e`
      );
      const jsonformat = await response.json();
      setCity(jsonformat.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="container center">
        <div className="box mt-5">
          <div className="row">
            <div className="col mt-5">
              <div className="inputBox">
                <input
                  placeholder="Search weather"
                  // value={city.name}
                  type="search"
                  className="searchLocationInput"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </div>
          </div>
          {!city ? (<p>Data not found</p>) : (
            <div className="row">
              <div className="col mt-5">
                <div className="info">
                  <h2 className="location">{search}</h2>
                  <h1 className="temp">{city.temp}</h1>
                  <h3 className="tempmin-max">{city.pressure}</h3>
                </div>
              </div>
            </div>
          )}
          <div className="waves"></div>
        </div>
      </div>
      <div className="wave-one"></div>
      <div className="wave-two"></div>
      <div className="wave-three"></div>
    </>
  );
};

export default FilterWeather;
