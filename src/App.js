import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MovieDisplayContainer from "./components/MovieDisplayContainer";
import Footer from "./components/Footer";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MovieDisplayContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
