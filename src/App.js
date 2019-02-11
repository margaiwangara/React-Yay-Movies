import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NowShowing from "./components/NowShowing";
import Trending from "./components/Trending";

import "./styles/App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NowShowing />
        <Trending />
      </div>
    );
  }
}

export default App;
