import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import * as api_constants from './API_URLs';

function App() {

  const [allCocktails, setAllCocktails] = useState([]);

  useEffect(() => {
    fetch(`${api_constants.API_CKTL_BY_NAME}margarita`)
      .then(res => res.json())
      .then(res => {
        setAllCocktails(res.drinks);
      });
  }, []);

  return (
    <>
      <Header />
      {/* {allCocktails.length !== 0 && <Main cocktails={allCocktails} />} */}
    </>
  );
}

export default App;
