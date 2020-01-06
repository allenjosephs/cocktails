import React from 'react';

import './FiltersAndResults.css';
import Filters from './../Filters';
import Results from './../Results';

function FiltersAndResults() {
  return (
    <div className="FiltersAndResults">
      <Filters />
      <Results />
    </div>
  )
}

export default FiltersAndResults
