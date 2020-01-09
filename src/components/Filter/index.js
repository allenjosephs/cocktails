import React from "react";
import "./Filter.css";

function Filter(props) {
  return (
    <div className="Filter">
      <div className="FilterLabel">{props.label}</div>
    </div>
  );
}

export default Filter;
