
import React from 'react';

import './Header.css';
import NavLinks from '../NavLinks';

function Header(props) {
  return (
    <nav className="Header">
      <h1>drink.</h1>
      <NavLinks />
    </nav>
  )
}

export default Header;
