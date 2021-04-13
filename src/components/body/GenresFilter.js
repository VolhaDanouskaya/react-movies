import "./body.scss";
import React from "react";

const GenresFilter = (props) => {
  return (
    <div className="genres-filter">
      <button className="item">All</button>
      <button className="item">Documentary</button>
      <button className="item">Comedy</button>
      <button className="item">Horror</button>
      <button className="item">Crime</button>
    </div>
  );
};

export default GenresFilter;
