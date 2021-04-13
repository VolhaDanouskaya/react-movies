import "./layout.scss";
import React from "react";
import PropTypes from "prop-types";

const Layout = (props) => {
  return <div className="main-layout">{props.children}</div>;
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Layout;
