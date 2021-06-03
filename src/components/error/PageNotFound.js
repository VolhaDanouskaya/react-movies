import React from 'react'

import { Container } from '@material-ui/core'

import Footer from '../footer/Footer'

import { Link } from 'react-router-dom'

/* eslint-disable import/no-absolute-path */
import logo from '/public/images/logo.png'
import './error.scss'

const PageNotFound = () => (
  <>
    <Container className="error-page" fixed>
      <img className="logo" src={logo} alt="" />
      <div className="error-content">
        <p className="error">Page Not Found</p>
        <Link to="/" className="home-link">
          Go Back TO Home
        </Link>
      </div>
    </Container>
    <Footer />
  </>
)

export default PageNotFound
