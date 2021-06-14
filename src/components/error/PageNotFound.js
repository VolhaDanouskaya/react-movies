import React from 'react';

import { Container } from '@material-ui/core';
import Image from 'next/image';
import { Link } from 'react-router-dom';

import Footer from '../footer/Footer';

import styles from './error.module.scss';

<Image src="/public/images/logo.png" className="logo-footer" />;

const PageNotFound = () => (
  <>
    <Container className={styles.errorPage} fixed>
      <Image src="/public/images/logo.png" width="150" height="50" />
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
