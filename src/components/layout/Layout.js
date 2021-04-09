import React from "react";
import './layout.css';
import Container from '@material-ui/core/Container';

const Layout = (props) => {
  return <div className="main-layout">{props.children}</div>;
};

export default Layout;
