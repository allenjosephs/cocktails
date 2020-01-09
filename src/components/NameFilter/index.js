import React from "react";

import "./NameFilter.css";

function NameFilter(props) {

  return (
    <div className="NameFilter">
      Name filter:
      <input
        type="text"
        id="nameFilterBox"
        placeholder="search..."
        name="search"
        onChange={(e) => props.setNameFilter(e)}
      ></input>
    </div>
  );
}

export default NameFilter;
