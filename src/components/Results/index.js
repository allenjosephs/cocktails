import React, { useState, useEffect } from 'react';
import './Results.css';

import Result from './../Result';
import Beverage from './../Beverage';
import * as api_constants from "./../../API_URLs";

function Results(props) {

  const [bevDtls, setBevDtls] = useState([]);

  const fetchBevDtls = cocktail => {
    fetch(`${api_constants.API_CKTL_BY_ID}${cocktail.idDrink}`)
      .then(res => res.json())
      .then(res => {
        let drink = parseBevDtls(res.drinks);
        setBevDtls(drink);
      });
  };

  const parseBevDtls = (drink) => {
    // This code will clean up the drink that was clicked
    // and return

    drink = parseIngredients(drink);

    let tmpCocktails = props.cocktails;
    let idx = tmpCocktails.findIndex((c) => {
      return c.idDrink === drink.idDrink;
    });

    tmpCocktails.splice(idx, 1, drink);
    return [drink];
  }

  const parseIngredients = (drink) => {
    // Helper function to clean up the data in the response

    // Beverage ingredients and measures are sent as 15 separate values respectively
    // This code will create an array of 2-position arrays for each ingredient/measure
    // pair then delete the original attributes and add the new array
    let bev = drink[0];
    let ingredientsArray = [];

    for (let i = 0; i < 15; i++) {
      if (bev[`strIngredient${(i + 1)}`]) {
        ingredientsArray[i] = [
          bev[`strIngredient${(i + 1)}`],
          bev[`strMeasure${(i + 1)}`]
        ];
      }
      delete bev["strIngredient" + (i + 1)];
      delete bev["strMeasure" + (i + 1)];
    }
    bev.arrIngredients = ingredientsArray;

    return bev;
  }

  const handleClick = cocktail => {
    // Check to see if the cocktail details have already been fectched
    // by finding the cocktail in the original state array and then looking
    // for arrIngredients.  Note, this attribute will only exist if the data has been
    // fully fetched from the db.
    let val = props.cocktails.find((c) => {
      return c.idDrink === cocktail.idDrink;
    });

    // If the arrIngredients attribute doesn't exist, perform the fectch
    !val.arrIngredients && fetchBevDtls(cocktail);

    setSticky(cocktail);
  };

  const showBeverage = cocktail => {
    // Function called if user is hovering over a result thumbnail
    // Since the content needed to show has already been fetched, don't fetch again

    let stickyBev = document.querySelector(".sticky");
    if (!stickyBev) {
      if (cocktail) {
        setBevDtls([cocktail]);
      } else {
        // User has scrolled off a icon
        // so we leave the last viewed
        // beverage in the callout
      }
    }
  };

   const setSticky = cocktail => {
     let id = cocktail.idDrink;

     // Mark as fetched if not already
     !document.getElementById(id).classList.contains("fetched") &&
       document.getElementById(id).classList.add("fetched");

    //  if (document.getElementById(id).classList.contains("selected")) {
    //    // user clicked on the existing sticky drink; toggle sticky off
    //    document.getElementById(id).classList.toggle("selected");
    //    document.getElementById("Beverage").classList.toggle("sticky");
    //  } else {
    //    // user clicked on a new drink
    //    // clear existing selected drink (if any)
    //    let selectedDrink = document.querySelector(".selected");
    //    selectedDrink && selectedDrink.classList.toggle("selected");

    //    // set new drink to selected
    //    document.getElementById(id).classList.toggle("selected");

    //    // toggle off the beverage callout's sticky-ness only if it's already sticky
    //    let stickyBev = document.querySelector(".sticky");
    //    stickyBev && stickyBev.classList.toggle("sticky");

    //   //  showBeverage(cocktail);
    //    document.getElementById("Beverage").classList.toggle("sticky");
    //  }
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
