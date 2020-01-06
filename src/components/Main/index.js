
import React, { useState, useEffect } from 'react';

import './Main.css';
import '../NavLinks';

import Filters from './../Filters';
import Results from "./../Results";
import Beverage from './../Beverage';

function Main(props) {

  return(
    <main className="Main">
      <Filters />
      <Results cocktails={props.cocktails} />
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
