import React, { useEffect } from 'react';

import './Result.css';

function showBeverage(cocktail) {
  document.getElementById("Beverage").innerHTML = "";
  if (cocktail) {
    let img = document.createElement("img");
    img.src = cocktail.strDrinkThumb;

    let desc = document.createElement("div");
    desc.innerHTML = cocktail.strDrink;

    document.getElementById("Beverage").appendChild(img);
    document.getElementById("Beverage").appendChild(desc);
  }
}

function Result(props) {
  const cocktail = props.cocktail;

  return (
    // <Link to={`/cocktails/${cocktail.idDrink}`} className="Result thumbs" onMouseOver={() => props.setBev(cocktail)}>
    //<Link
//      to={`/cocktails/${cocktail.idDrink}`}
      <div className="Result thumbs"
        onMouseOver={() => showBeverage(cocktail)}
        onMouseLeave={() => showBeverage(null)}>
        <img
          src={`${cocktail.strDrinkThumb}/preview`}
          alt={cocktail.strDrink}
        ></img>
      <div className="bevName">{cocktail.strDrink}</div>
    </div>
  );
}

export default Result;
