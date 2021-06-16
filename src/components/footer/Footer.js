import React from 'react';

import { Container } from '@material-ui/core';

import styles from './footer.module.scss';

const Footer = () => (
  <Container className={styles.footer} fixed>
    <img src="/images/logo.png" className={styles.logoFooter} alt="logo" />
  </Container>
);

export default Footer;
