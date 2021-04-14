import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

const App = () => {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
