import React from 'react';

import { Container } from '@material-ui/core';
import Image from 'next/image';

import styles from './footer.module.scss';

const Footer = () => (
  <Container className={styles.footer} fixed>
    <Image src="/public/images/logo.png" className={styles.logoFooter} width="150" height="50" />
  </Container>
);

export default Footer;
