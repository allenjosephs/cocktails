import React from 'react';

import './FiltersAndResults.css';
import Filters from './../Filters';
import Results from './../Results';

function FiltersAndResults(props) {
  return (
    <div className="FiltersAndResults">
      <Filters />
      <Results cocktails={props.cocktails} />
    </div>
  )
}

export default FiltersAndResults
