import React, { useState, useEffect } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
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

  }, []);

  return (
    <div className="App">
      <Header />
      <Main cocktails={cocktails} />
    </div>
  );
}

export default App;
