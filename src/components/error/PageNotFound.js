import React from 'react';

import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';

import styles from './error.module.scss';

const PageNotFound = () => (
  <>
    <Container className={styles.errorPage} fixed>
      <img src="/images/logo.png" className={styles.logo} alt="logo" />
      <div className={styles.errorContent}>
        <p className={styles.error}>Page Not Found</p>
        <Link to="/movies" className={styles.homeLink} title="linkToHome">
          Go Back To Home
        </Link>
      </div>
    </Container>
    <Footer />
  </>
);

export default PageNotFound;
