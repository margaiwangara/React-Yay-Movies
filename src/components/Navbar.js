import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/" className="navbar-brand">
          <span>yay</span>
          <span>movies</span>
        </a>
      </nav>
      <div className="header-caption">
        <div className="caption-inner">
          <div className="top">
            <h1>ralph breaks the internet</h1>
            <h6>comedy animation adventure fantasy</h6>
          </div>
          <div className="center">
            <button className="btn btn-primary">
              <span className="main">
                <span>view trailer</span> <i className="far fa-play-circle" />
              </span>
            </button>
          </div>
          <div className="bottom">
            <h6>in theatres</h6>
            <h3>5 nov, 2018 (USA)</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
