import React from 'react';
import './NavLinks.css';
import NavLink from './../NavLink';

function NavLinks() {
  return (
    <div className="NavLinks">
      <NavLink txt="Mixed Drinks" /> |
      <NavLink txt="Shots" /> |
      <NavLink txt="Breweries" /> |
      <NavLink txt="Teetotalers" />
    </div>
  );
}

export default NavLinks;
