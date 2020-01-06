import React from 'react'
import './Results.css';

import Result from './../Result';

function Results(props) {
  return (
    <div className="Results">
      {props.cocktails.map(c => {
        return <Result cocktail={c}/>
      })
      }
    </div>
  );
}

export default Results
