import React from 'react';

import './Result.css';

function Result(props) {

  const cocktail = props.cocktail;

  return (
    <div
      id={cocktail.idDrink}
      className="Result thumbs"
      onClick={() => props.handleClick(cocktail)}
      onMouseOver={() => props.showBeverage(cocktail)}
      onMouseLeave={() => props.showBeverage(null)}
    >
      <img
        src={`${cocktail.strDrinkThumb}/preview`}
        alt={cocktail.strDrink}
      ></img>
      <div className="bevName">{cocktail.strDrink}</div>
    </div>
  );
}

export default Result;
