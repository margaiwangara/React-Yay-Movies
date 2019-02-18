import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MovieDisplayContainer from "./components/MovieDisplayContainer";
import Footer from "./components/Footer";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <MovieDisplayContainer />

        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
