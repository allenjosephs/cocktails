import React, { useState, useEffect } from 'react';
import './Results.css';

import Result from './../Result';
import Beverage from './../Beverage';
import * as api_constants from "./../../API_URLs";

function Results(props) {

  const [bevDtls, setBevDtls] = useState([]);
  const [selectedBev, setSelectedBev] = useState([]);

  const parseIngredients = (drink) => {
    // Helper function to clean up the data in the response

    // Beverage ingredients and measures are sent as 15 separate values respectively
    // This code will create an array of 2-position arrays for each ingredient/measure
    // pair then delete the original attributes and add the new array
    let bev = drink;
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
    console.log(cocktail)

    // If the arrIngredients attribute doesn't exist, parse the ingredients
    // to make them more manageable and then update cocktails
    if (!cocktail.arrIngredients) {
      cocktail = parseIngredients(cocktail);

      let tmpCocktails = props.cocktails;
      let idx = tmpCocktails.findIndex(c => {
        return c.idDrink === cocktail.idDrink;
      });

      tmpCocktails.splice(idx, 1, cocktail);
      props.setCocktails(tmpCocktails);
    }
    setSticky(cocktail);
  };

  const showBeverage = cocktail => {
    // Function called if user is hovering over a result thumbnail
    // Since the content needed to show has already been fetched, don't fetch again

    // let stickyBev = document.querySelector(".selected");
    // if (!stickyBev) {
      if (cocktail) {
        setBevDtls([cocktail]);
      } else {
        // User has scrolled off a icon
        // so we leave the last selected (if any)
        // beverage in the callout
        setBevDtls([selectedBev]);
      }
    // }
  };

   const setSticky = cocktail => {
     let id = cocktail.idDrink;

     // Mark as fetched if not already
     !document.getElementById(id).classList.contains("fetched") &&
       document.getElementById(id).classList.add("fetched");

     if (document.getElementById(id).classList.contains("selected")) {
       // user clicked on the existing sticky drink; toggle sticky off
       document.getElementById(id).classList.toggle("selected");
       setSelectedBev([]);
      //  document.getElementById("Beverage").classList.toggle("sticky");
     } else {
       // user clicked on a new drink
       // clear existing selected drink (if any)
       let selectedDrink = document.querySelector(".selected");
       selectedDrink && selectedDrink.classList.toggle("selected");

       // set new drink to selected
       document.getElementById(id).classList.toggle("selected");
       setSelectedBev(cocktail);

       // toggle off the beverage callout's sticky-ness only if it's already sticky
      //  let stickyBev = document.querySelector(".sticky");
      //  stickyBev && stickyBev.classList.toggle("sticky");

      //  showBeverage(cocktail);
      //  document.getElementById("Beverage").classList.toggle("sticky");
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
