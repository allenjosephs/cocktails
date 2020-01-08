import React, { useState } from "react";

import "./ResultsGrid.css";
import Results from "./../Results";
import NameFilter from "./../NameFilter";

function ResultsGrid(props) {

  const [nameFilterValue, setNameFilterValue] = useState("");

  const handleNameFilterChange = (e) => {
    setNameFilterValue(e.target.value);
  };

  return (
    <div className="ResultsGrid">
      <NameFilter setNameFilter={handleNameFilterChange} />
      <Results
        cocktails={props.cocktails.filter(c => {
          console.log(nameFilterValue);
          if (!nameFilterValue) {
            return true;
          } else {
            if (c.strDrink.toLowerCase().includes(nameFilterValue.toLowerCase())) {
              console.log(c.strDrink);
              return true;
            } else {
              return false;
            }
          }
        })}
        setCocktails={props.setCocktails}
        setBev={props.handleSelectedBevUpdate}
      />
    </div>
  );
}

export default ResultsGrid;
