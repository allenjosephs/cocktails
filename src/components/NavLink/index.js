import React from 'react';
import { Link } from 'react-router-dom';

import './NavLink.css';

function NavLink(props) {
  return (
    <div className="NavLink">
      <Link to={props.path}>{props.txt}</Link>
    </div>
  );
}

export default NavLink

