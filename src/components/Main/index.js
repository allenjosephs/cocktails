
import React, { useState, useEffect } from 'react';

import './Main.css';
import '../NavLinks';

import FiltersAndResults from './../FiltersAndResults';
import Beverage from './../Beverage';

function Main(props) {

  return(
    <main className="Main">
      <FiltersAndResults />
      <Beverage />
    </main>

    // props.cocktails.map(c => {
    //   return(
    //     <p> {c.strDrink} </p>
    //   )
    // })
  )

}

export default Main;
