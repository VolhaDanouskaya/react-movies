import "./footer.scss";
import { Container } from "@material-ui/core";
import React from "react";
import logo from "/public/images/logo.png";

const Footer = () => {
  return (
    <Container className="footer" fixed>
      <img className="logo-footer" src={logo} />
    </Container>
  );
};

export default Footer;
