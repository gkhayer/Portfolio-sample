import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Card from "./Cards";
import sdata from "./sdata";
import Slotmachine from "./Slotmachine";
import Hooks from "./Hooks";
import Forms from "./Forms";
import Todo from "./TodoList";
import CounterRH from "./CounterRH";
import DigitalClock from "./DigitalClock";
import Notes from "./Notes";
import Parent from "./useContextExample/Parent";
import CheckAlertOnButtons from "./useEffectExample/CheckAlertOnButtons";
import HookChallenge from "./useEffectExample/HookChallenge";
import GetDataFromApi from "./GetDataFromApi";
import PokemonApi from "./useEffectExample/PokemonApi";
import RoutingExample from "./RoutingExample";
import Error from "./Error";
import Navbar from "./Navbar";
import MiniNavBar from "./exampleNavBarProps/MiniNavBar";
import MiniItem1 from "./exampleNavBarProps/MiniItem1";
import MiniItem2 from "./exampleNavBarProps/MiniItem2";
import MiniItem3 from "./exampleNavBarProps/MiniItem3";
import Params from "./useParamExample/Params";
import GetUserHistory from "./useHistoryExample/GetUserHistory";
import SearchFilter from "./SearchFilter";
import Home from "./Home";

const favSeries = "netflix";
const Netflix = () => {
  return (
    <Card
      key={sdata[1].id}
      imgSrc={sdata[1].imgScr}
      cate={sdata[1].cate}
      title={sdata[1].title}
      link={sdata[1].links}
      userId={sdata[1].userId}
    />
  );
};

const Amazon = () => {
  return (
    <Card
      key={sdata[4].id}
      imgSrc={sdata[4].imgScr}
      cate={sdata[4].cate}
      title={sdata[4].title}
      link={sdata[4].links}
      userId={sdata[4].userId}
    />
  );
};

const FindFav = () => {
  return <Netflix />;
};

const FindFav2 = () => {
  const favseries = favSeries === "netflix" ? <Netflix /> : <Amazon />;
  return favseries;
};

const note = () => {
  return <h1>This is a test page</h1>;
};

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/routingExample" component={RoutingExample} />
        <Route path="/pokemonApi" component={PokemonApi} />
        <Route path="/getDataFromApi" component={GetDataFromApi} />
        <Route path="/hookChallenge" component={HookChallenge} />
        <Route path="/checkAlertOnButtons" component={CheckAlertOnButtons} />
        <Route path="/parent" component={Parent} />
        <Route exact path="/notes" component={Notes} />
        <Route path="/notes/note" component={note} />
        {/* again notes will show up because of switch matching Notes first, Use "exact" in this case */}
        <Route path="/todo" component={Todo} />
        <Route path="/counterRH" component={CounterRH} />
        <Route path="/digitalClock" component={DigitalClock}></Route>
        <Route path="/forms" component={Forms} />
        <Route path="/hooks" component={Hooks} />
        <Route path="/slotmachine" component={Slotmachine} />
        <Route path="/findFav2" component={FindFav2} />
        <Route path="/findFav" component={FindFav} />
        <Route path="/miniNavBar" component={MiniNavBar} />
        <Route path="/getUserHistory" component={GetUserHistory} />
        <Route path="/searchFilter" component={SearchFilter} />
        {/* we can also pass props */}
        {/* Component vs Render */}
        {/* This is Route Component example */}
        <Route
          path="/miniItem1"
          component={() => <MiniItem1 name="Test mini page 1" />}
        />
        {/* Render example */}
        <Route
          path="/miniItem2"
          render={() => <MiniItem2 name="Test Mini page 2" />}
        />
        <Route path="/miniItem3" component={MiniItem3} />
        <Route path="/params/:anyname/:anyOtherName" component={Params} />
        <Route path="/" component={Home} />
        <Route component={Error} />
      </Switch>
      <p id="showDAta"></p>
      {/* sdat.map(ncard) : ncard is a function (this is called functional programming) */}
    </>
  );
};

export default App;
