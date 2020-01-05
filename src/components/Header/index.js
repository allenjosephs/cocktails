
import React, { useState, useEffect } from 'react';

import './Header.css';
import '../NavLinks';

function Header(props) {
  console.log(props);
  return (
    <div>
      {props.cocktails.allCocktails}
    </div>
  )
}

export default Header;
