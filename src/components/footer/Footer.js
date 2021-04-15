/* eslint-disable import/no-absolute-path */
import './footer.scss';
import { Container } from '@material-ui/core';
import React from 'react';
import logo from '/public/images/logo.png';

const Footer = () => (
  <Container className="footer" fixed>
    <img className="logo-footer" src={logo} alt="" />
  </Container>
);

export default Footer;
