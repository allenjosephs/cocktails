import React, { useState } from 'react';
import './NavLinks.css';
import NavLink from './../NavLink';

function NavLinks() {

  const [activePage, setActivePage] = useState("");

  return (
    <div className="NavLinks">
      <NavLink
        path="/"
        txt="mixed"
        activePage={activePage}
        setActivePage={setActivePage}
      />
      |
      <NavLink
        path="Shots"
        txt="shots"
        activePage={activePage}
        setActivePage={setActivePage}
      />
      |
      <NavLink
        path="Teetotalers"
        txt="teetotal"
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default NavLinks;
