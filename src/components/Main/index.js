
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import './Main.css';
import '../NavLinks';

import Filters from './../Filters';
import Results from './../Results'

function Main(props) {

  const [selectedBev, setSelectedBev] = useState({});

  const handleSelectedBevUpdate = bev => {
    setSelectedBev(bev);
  };

  return (
    <main className="Main">
      <Filters />
      <Results
        cocktails={props.cocktails}
        setCocktails={props.setCocktails}
        setBev={handleSelectedBevUpdate}
      />

      {/* <Route
        path="/cocktails/:cocktail"
        render={props => (
          <>
            <Beverage bev={selectedBev} {...props} exact/>
          </>
        )}
      ></Route> */}
    </main>
  );
}

export default Main;
