import React from "react";

import "./Ingredients.css";
import Ingredient from "./../Ingredient";

function Ingredients(props) {

  const ingredients = props.ingredients;

  return (
    <div className="Ingredients">
      {ingredients.map((i, idx) => {
        return <Ingredient key={idx} ingredient={i} />
      })}
    </div>
  );
}

export default Ingredients;
