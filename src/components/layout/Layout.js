import "./layout.scss";
import React from "react";

const Layout = (props) => {
  return <div className="main-layout">{props.children}</div>;
};

export default Layout;
