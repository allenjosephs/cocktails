import React, { useState } from 'react';
import './NavLinks.css';
import NavLink from './../NavLink';

function NavLinks() {

  const [activePage, setActivePage] = useState("all");

  return (
    <div className="NavLinks">
      <NavLink
        path="/"
        txt="all"
        activePage={activePage}
        setActivePage={setActivePage}
      />
      |
      <NavLink
        path="/mixed"
        txt="mixed"
        activePage={activePage}
        setActivePage={setActivePage}
      />
      |
      <NavLink
        path="shots"
        txt="shots"
        activePage={activePage}
        setActivePage={setActivePage}
      />
      |
      <NavLink
        path="teetotal"
        txt="teetotal"
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </div>
  );
}

export default NavLinks;
