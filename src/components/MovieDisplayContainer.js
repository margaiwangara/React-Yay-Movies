import React from "react";
import Trending from "./Trending";
import Popular from "./Popular";
import NowShowing from "./NowShowing";

import "../scripts/MovieDisplay";

const MovieDisplaycontainer = props => (
  <div id="main-content">
    <ul>
      <li>
        <a href="#trending" class="active tab" data-id="2">
          trending
        </a>
      </li>
      <li>
        <a href="#in-theatres" class="tab">
          in theatres
        </a>
      </li>
      <li>
        <a href="#popular" class="tab">
          popular
        </a>
      </li>
      <li>
        <a href="#coming-soon" class="tab">
          coming soon
        </a>
      </li>
    </ul>

    <div class="content">
      <div class="content-data active" id="trending">
        <div class="movies-container">
          <Trending />
        </div>
      </div>
      <div class="content-data" id="in-theatres">
        <div class="movies-container">
          <NowShowing />
        </div>
      </div>

      <div class="content-data" id="popular">
        <div class="movies-container">
          <Popular />
        </div>
      </div>
      <div class="content-data" id="coming-soon">
        <div class="movies-container">
          <Popular />
        </div>
      </div>
    </div>
  </div>
);

export default MovieDisplaycontainer;
