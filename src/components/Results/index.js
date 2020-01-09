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
