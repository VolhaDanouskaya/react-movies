import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    id: 337167,
    title: "Fifty Shades Freed",
    release_date: "2018-02-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    id: 181808,
    title: "Star Wars: The Last Jedi",
    release_date: "2017-12-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    genres: ["Fantasy", "Adventure", "Science Fiction"],
  },
  {
    id: 284054,
    title: "Black Panther",
    release_date: "2018-02-13",
    poster_path:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
  },
  {
    id: 354912,
    title: "Coco",
    release_date: "2017-10-27",
    poster_path:
      "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    genres: ["Adventure", "Comedy", "Family", "Animation"],
  },
  {
    id: 333339,
    title: "Ready Player One",
    release_date: "2018-03-28",
    poster_path: "https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    genres: [
        "Adventure",
        "Science Fiction",
        "Action"
    ],
},
];

const MovieList = (props) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
