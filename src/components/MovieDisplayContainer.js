import React from "react";
import Trending from "./Trending";
import Popular from "./Popular";
import NowShowing from "./NowShowing";

import "../scripts/MovieDisplay";

const MovieDisplaycontainer = props => (
  <React.Fragment>
    <div id="main-content">
      <ul>
        <li>
          <a href="#trending" className="active tab" data-id="2">
            trending
          </a>
        </li>
        <li>
          <a href="#in-theatres" className="tab">
            in theatres
          </a>
        </li>
        <li>
          <a href="#popular" className="tab">
            popular
          </a>
        </li>
        <li>
          <a href="#coming-soon" className="tab">
            coming soon
          </a>
        </li>
      </ul>

      <div className="content">
        <div className="content-data active" id="trending">
          <div className="movies-container">
            <Trending />
          </div>
        </div>
        <div className="content-data" id="in-theatres">
          <div className="movies-container">
            <NowShowing />
          </div>
        </div>

        <div className="content-data" id="popular">
          <div className="movies-container">
            <Popular />
          </div>
        </div>
        <div className="content-data" id="coming-soon">
          <div className="movies-container">
            <Popular />
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default MovieDisplaycontainer;
