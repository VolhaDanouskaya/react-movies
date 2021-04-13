import "./header.scss";
import React from "react";
import SearchBar from "./searchBar/SearchBar";
import { Container } from "@material-ui/core";
import logo from "/public/images/logo.png";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <Container className="header" fixed>
      <div className="subheader">
        <img className="logo" src={logo} />
        <Button id="button-add-movie" variant="contained" size="large">
          + Add Movie
        </Button>
      </div>
      <SearchBar />
    </Container>
  );
};

export default Header;
