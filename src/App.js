import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';

function App() {

  const [allCocktails, setAllCocktails] = useState({
    allCocktails: []
  });

  const updateAllCocktails = cocktailsArray => {
    setAllCocktails({
      allCocktails: cocktailsArray
    })
  }

  useEffect(() => {
    updateAllCocktails(getAllCockails());
  }, []);

  const getAllCockails = () => {
    return ["cocktail1", "cocktail2", "cocktail3"];
  }

  return (
    <Header cocktails={allCocktails} />
  );
}



export default App;
