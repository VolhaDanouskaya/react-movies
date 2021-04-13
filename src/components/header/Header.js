import "./header.scss";
import React from "react";
import AddMovie from "./AddMovie";
import SearchBar from "./SearchBar";
import { Container } from "@material-ui/core";
import logo from "/public/images/logo.png";

const Header = () => {
  return (
    <Container className="header" fixed>
      <div className="subheader">
        <img className="logo" src={logo} />
        <AddMovie />
      </div>
      <SearchBar />
    </Container>
  );
};

export default Header;
