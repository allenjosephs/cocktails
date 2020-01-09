import React from 'react';
import './NavLinks.css';
import NavLink from './../NavLink';

function NavLinks() {
  return (
    <div className="NavLinks">
      <NavLink path="/" txt="mixed" /> |
      <NavLink path="Shots" txt="shots" /> |
      <NavLink path="Teetotalers" txt="teetotal" />
    </div>
  );
}

export default NavLinks;
