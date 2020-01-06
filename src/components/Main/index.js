
import React, { useState, useEffect } from 'react';

import './Main.css';
import '../NavLinks';

function Header(props) {
  console.log('in Header')
  console.log(props.cocktails);

  return (
    <div>
      {props.cocktails.map(c => {
        return c.strDrink
      })}
    </div>
  )
}

export default Header;
