import "./body.css";
import { Container } from "@material-ui/core";
import React from "react";
import MovieList from "./MovieList";

const Body = (props) => {
  return (
    <Container className="body" fixed>
      <div>
        <div>Filter by genres</div>
        <div>Sorting by</div>
        <MovieList />
      </div>
    </Container>
  );
};

export default Body;
