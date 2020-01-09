
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import './Main.css';
import '../NavLinks';

import Filters from './../Filters';
import ResultsGrid from './../ResultsGrid'

function Main(props) {

  const [selectedBev, setSelectedBev] = useState({});

  const handleSelectedBevUpdate = bev => {
    setSelectedBev(bev);
  };

  return (
    <main className="Main">
      <Filters />
      <ResultsGrid
        cocktails={props.cocktails}
        setCocktails={props.setCocktails}
        setBev={handleSelectedBevUpdate}
        allCocktails={props.allCocktails}
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
