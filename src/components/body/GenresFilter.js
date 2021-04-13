import "./body.scss";
import React from "react";

const genres = ["All", "Documentary", "Comedy", "Horror", "Crime"];

const GenresFilter = (props) => {
  return (
    <div className="genres-filter">
      {genres.map((genre) => (
        <button key={genre} onClick={() => props.onFilterClick(genre)} className="item">
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenresFilter;
