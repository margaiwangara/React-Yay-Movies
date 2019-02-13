import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <a href="#now-showing" className="navbar-brand">
          Yay!Movies
        </a>

        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#now-showing" className="nav-link">
                Now Showing
              </a>
            </li>
            <li className="nav-item">
              <a href="#trending" className="nav-link">
                Trending
              </a>
            </li>
            <li className="nav-item">
              <a href="#popular" className="nav-link">
                Popular
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
