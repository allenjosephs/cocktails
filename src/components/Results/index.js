import React, { useState, useEffect } from 'react';
import './Results.css';

import Result from './../Result';

function Results(props) {
  console.log("rendering results");
  return (
    <div className="Results">
      {props.cocktails.map(c => {
        return <Result key={c.idDrink} cocktail={c} setBev={props.setBev} />
      })}
    </div>
  );
}

export default Results
