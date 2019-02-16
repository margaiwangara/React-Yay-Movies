import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/" class="navbar-brand">
          <span>yay</span>
          <span>movies</span>
        </a>
      </nav>
      <div class="header-caption">
        <div class="caption-inner">
          <div class="top">
            <h1>ralph breaks the internet</h1>
            <h6>comedy animation adventure fantasy</h6>
          </div>
          <div class="center">
            <button class="btn btn-primary">
              <span class="main">
                <span>view trailer</span> <i class="far fa-play-circle" />
              </span>
            </button>
          </div>
          <div class="bottom">
            <h6>in theatres</h6>
            <h3>5 nov, 2018 (USA)</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
