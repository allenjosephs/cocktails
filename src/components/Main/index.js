
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
      <ResultsGrid
        cocktails={props.cocktails}
        setCocktails={props.setCocktails}
        setBev={handleSelectedBevUpdate}
        allCocktails={props.allCocktails}
      />
    </main>
  );
}

export default Main;
