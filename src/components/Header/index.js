
import React, { useState, useEffect } from 'react';

import './Header.css';
import NavLinks from '../NavLinks';

function Header(props) {
  return (
    <nav className="Header">
      <h1>Cocktails</h1>
      <NavLinks />
    </nav>
  )
}

export default Header;
