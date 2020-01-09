import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

function NavLink(props) {

  const setActivePage = () => {
    props.setActivePage(props.txt);
  }

  return (
    <div className="NavLink" onClick={setActivePage}>
      <Link className={props.activePage === props.txt ? "active" : ""} to={props.path}>{props.txt}</Link>.
    </div>
  );
}

export default NavLink

