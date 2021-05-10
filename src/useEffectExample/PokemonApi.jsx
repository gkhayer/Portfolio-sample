import React, { useState, useEffect } from "react";
import axios from "axios";

// const fetchApi = "https://pokeapi.co/api/v2"
// const getItem = () => {
//     fetch(fetchApi).then((res) => res.json())
// }

const PokemonApi = () => {
  const [num, setItem] = useState("None selected");
  const [pokeName, setName] = useState("None selected");
  const [moves, setMoves] = useState("None selected");

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves[0].move.name);
    }
    getData();
  });



  const testFunction = (e) => {
    const value = e.target.value;
    setItem(value);
  };
  return (
    <>
      <h1 className="heading_style">❤️ Pokemon❤️</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="center">Pokemon select game</h1>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={testFunction}
            >
              <option>Open this select menu</option>
              <option value="1">1</option>
              <option value="25">25</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <br />
            <div style={{textTransform: 'capitalize'}}>
              <h5>Selected value is: {num}</h5><br/>
              <h5>My name is: {pokeName}</h5><br/>
              <h5>My First move anme is: {moves}</h5><br/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonApi;
