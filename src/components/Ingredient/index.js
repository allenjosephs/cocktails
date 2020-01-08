import React from "react";

import "./Ingredient.css";

function Ingredient(props) {
  const ingredient = props.ingredient;

  return (
    <div className="Ingredient">
      <span className="ingredient">{ingredient[0]}</span> : <span className="measure">{ingredient[1]}</span>
    </div>
  );
}

export default Ingredient;
