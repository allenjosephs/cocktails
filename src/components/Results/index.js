import React, { useState, useEffect } from 'react';
import './Results.css';

import Result from './../Result';
import Beverage from './../Beverage';
import * as api_constants from "./../../API_URLs";

function Results(props) {

  const [bevDtls, setBevDtls] = useState([]);
  const [selectedBev, setSelectedBev] = useState([]);

  const handleClick = cocktail => {
    setSticky(cocktail);
  };

  const showBeverage = cocktail => {
    // Function is called as user hovers over or moves off a result thumbnail

      if (cocktail) {
        //User has hovered over a thumbnail
        setBevDtls([cocktail]);
      } else {
        // User has scrolled off a thumbnail
        // so we leave the last selected
        // beverage (if any) in the callout
        setBevDtls([selectedBev]);
      }
  };

  const setSticky = cocktail => {
    let id = cocktail.idDrink;

    // Mark as fetched
    cocktail.fetched = "fetched";

    let tmpAllCocktails = props.allCocktails;
    if (cocktail.selected) {
      // user clicked on currently selected drink
      cocktail.selected = "";
      setSelectedBev([]);

      let idx = props.allCocktails.findIndex(c => {
        return c.idDrink === cocktail.idDrink;
      });

      tmpAllCocktails.splice(idx, 1, cocktail);
      props.setCocktails(tmpAllCocktails);

    } else {
      // user click on new drink, clear "selected" from all other drinks
      tmpAllCocktails = props.allCocktails.map(c => {
        c.selected = "";
        return c;
      });

      // set selected on this cocktail
      cocktail.selected = "selected";
      setSelectedBev(cocktail);

      let idx = props.allCocktails.findIndex(c => {
        return c.idDrink === cocktail.idDrink;
      });

      tmpAllCocktails.splice(idx, 1, cocktail);
      props.setCocktails(tmpAllCocktails);
    }
  };

  return (
    <>
      <div className="Results">
        {props.cocktails.map(c => {
          return (
            <Result
              key={c.idDrink}
              cocktail={c}
              setBev={props.setBev}
              handleClick={handleClick}
              showBeverage={showBeverage}
            />
          );
        })}
      </div>
      <Beverage cocktail={bevDtls} />
    </>
  );
}

export default Results
