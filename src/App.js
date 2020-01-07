import React, { useState, useEffect } from 'react';
import './App.css';
// const [selectedBev, setSelectedBev] = useState({});

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Beverage from './components/Beverage';
import * as api_constants from './API_URLs';

function App() {

  const [cocktails, setCocktails] = useState([]);
  const [naCocktails, setNaCocktails] = useState([]);
  const [shots, setShots] = useState([]);

  useEffect(() => {
    fetch(api_constants.API_CKTL_ALL_ALCOHOLIC)
      .then(res => res.json())
      .then(res => {
        setCocktails(res.drinks);
      });

    fetch(api_constants.API_CKTL_ALL_NON_ALCOHOLIC)
      .then(res => res.json())
      .then(res => {
        setNaCocktails(res.drinks);
      });

    fetch(api_constants.API_CKTL_ALL_SHOTS)
      .then(res => res.json())
      .then(res => {
        setShots(res.drinks);
      });

    window.addEventListener("scroll", handleScroll);

  }, []);

  // const handleSelectedBevUpdate = bev => {
  //   setSelectedBev(bev);
  // };

  const handleScroll = (e) => {
    if (
      document.body.scrollTop > window.innerHeight * 0.2 ||
      document.documentElement.scrollTop > window.innerHeight * 0.2
    ) {
      document.getElementsByClassName("Beverage")[0].classList.add("scrolled");
    } else {
      document
        .getElementsByClassName("Beverage")[0]
        .classList.remove("scrolled");
    }
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/breweries/" render={() => "Hi"}></Route>
        {/* <Route
          path="/cocktails/:cocktail"
          render={props => (
            <>
              <Main cocktails={cocktails} setBev={handleSelectedBevUpdate} />
              <Beverage bev={selectedBev} {...props} />
            </>
          )}
        ></Route> */}
        <Route
          path="/"
          render={props => (
            <>
              <Main
                cocktails={cocktails}
                // setBev={handleSelectedBevUpdate}
                {...props}
                exact
              />
              {/* <Beverage bev={selectedBev} {...props} /> */}
            </>
          )}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
