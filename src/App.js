import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NowShowing from "./components/NowShowing";
import Trending from "./components/Trending";
import Popular from "./components/Popular";

import "./styles/App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NowShowing />
        <Trending />
        <Popular />
      </div>
    );
  }
}

export default App;
