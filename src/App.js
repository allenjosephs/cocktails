import React, { useState, useEffect } from 'react';
import './App.css';
// const [selectedBev, setSelectedBev] = useState({})

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import * as api_constants from './API_URLs';

function App() {

  const [cocktails, setCocktails] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(api_constants.API_CKTL_ALL)
      .then(res => res.json())
      .then(res => {
        parseResults(res.drinks);
        setCocktails(res.drinks);
      }, [])
      .catch((error) => {
        console.log(error)});

    window.addEventListener("scroll", handleScroll);

  }, []);

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

  const alphaSort = (a, b) => {
    let dNameA = a.strDrink.toUpperCase();
    let dNameB = b.strDrink.toUpperCase();
    if (dNameA < dNameB) {
      return -1;
    } else {
      return 1;
    }
  }

  const parseResults = drinksArray => {
    // parseResults is a helper function to
    // delegate any cleanup tasks required on the API data
    drinksArray.map(d => {
      d.fetched = "";
      d.selected = "";
      parseIngredients(d);
    })

  }

  const parseIngredients = drink => {
    // Beverage ingredients and measures are sent as 15 separate values respectively
    // This code will create an array of 2-position arrays for each ingredient/measure
    // pair then delete the original attributes and add the new array
    let bev = drink;
    let ingredientsArray = [];

    for (let i = 0; i < 15; i++) {
      if (bev[`strIngredient${i + 1}`]) {
        ingredientsArray[i] = [
          bev[`strIngredient${i + 1}`],
          bev[`strMeasure${i + 1}`]
        ];
      }
      delete bev[`strIngredient${(i + 1)}`];
      delete bev[`strMeasure${(i + 1)}`];
    }
    bev.arrIngredients = ingredientsArray;

    return bev;
  };

  if (cocktails.length > 0) {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/mixed"
          render={props => (
            <>
              <Main
                cocktails={cocktails
                  .filter(c => {
                    return (
                      (c.strAlcoholic
                        ? c.strAlcoholic.toUpperCase() === "ALCOHOLIC" ||
                          c.strAlcoholic.toUpperCase().includes("OPTIONAL")
                        : false) && c.strCategory.toUpperCase() !== "SHOT"
                    );
                  })
                  .sort(alphaSort)}
                setCocktails={setCocktails}
                allCocktails={cocktails}
                {...props}
                exact
              />
            </>
          )}
        ></Route>
        <Route
          path="/shots"
          render={props => (
            <>
              <Main
                cocktails={cocktails
                  .filter(c => {
                    return c.strCategory.toUpperCase() === "SHOT";
                  })
                  .sort(alphaSort)}
                setCocktails={setCocktails}
                allCocktails={cocktails}
                {...props}
                exact
              />
            </>
          )}
        ></Route>
        <Route
          path="/teetotal"
          render={props => (
            <>
              <Main
                cocktails={cocktails
                  .filter(c => {
                    // strAlcoholic may be null on some entries
                    return c.strAlcoholic
                      ? c.strAlcoholic.toUpperCase() !== "ALCOHOLIC"
                      : c;
                  })
                  .sort(alphaSort)}
                setCocktails={setCocktails}
                allCocktails={cocktails}
                {...props}
                exact
              />
            </>
          )}
        ></Route>
        <Route
          path="/"
          render={props => (
            <>
              <Main
                cocktails={cocktails.sort(alphaSort)}
                setCocktails={setCocktails}
                allCocktails={cocktails}
                {...props}
                exact
              />
            </>
          )}
        ></Route>
      </Switch>
    </div>
  );

  } else {
    return  (
      <>
        <div class="loader">Loading...</div>
      </>
    )
  }
}

export default App;
