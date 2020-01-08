import React, { useState, useEffect } from 'react';

import './Beverage.css';

import Ingredients from './../Ingredients';

function Beverage(props) {

  let cocktail = props.cocktail;

  let thumbnail = "";
  if (cocktail.length > 0) {
    return (
      <div className="Beverage" id="Beverage">
        <img src={cocktail[0].strDrinkThumb}></img>
        <div className="bevName">{cocktail[0].strDrink}</div>

        {cocktail[0].arrIngredients &&
          <div className="ingredients">
            <Ingredients ingredients={cocktail[0].arrIngredients} />
            <div className="instructions">{cocktail[0].strInstructions}</div>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div className="Beverage" id="Beverage"></div>
    )
  }
}

export default Beverage;
