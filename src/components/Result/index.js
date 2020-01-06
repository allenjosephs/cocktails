import React from 'react';

import './Result.css';

function Result(props) {
  const cocktail = props.cocktail;
  return (
    <div className="Result thumbs">
      <img className="thumbImg" src={cocktail.strDrinkThumb}></img>
      <div className="bevName">{cocktail.strDrink}</div>
    </div>
  );
}

export default Result;
