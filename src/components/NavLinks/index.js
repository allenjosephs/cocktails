import React from 'react';
import './NavLinks.css';
import NavLink from './../NavLink';

function NavLinks() {
  return (
    <div className="NavLinks">
      <NavLink path="/" txt="Mixed Drinks" /> |
      <NavLink path="Shots" txt="Shots" /> |
      <NavLink path="Teetotalers" txt="Teetotalers" />
    </div>
  );
}

export default NavLinks;
