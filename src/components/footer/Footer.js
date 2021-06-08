import { Container } from '@material-ui/core';

import React from 'react';
import './footer.scss';

// eslint-disable-next-line import/no-absolute-path
import logo from '/public/images/logo.png';

const Footer = () => (
  <Container className="footer" fixed>
    <img className="logo-footer" src={logo} alt="" />
  </Container>
);

export default Footer;
