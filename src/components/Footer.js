import React from "react";

import logo from "../images/logo.png";

const Footer = props => (
  <footer>
    <a href="#home" className="logo">
      {/* <span>yay</span>
      <span>movies</span> */}
      <img src={logo} alt="logo" />
    </a>
    <div className="social-links">
      <ul>
        <li>
          <a href="#facebook">
            <i className="fab fa-facebook-square" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#pinterest">
            <i className="fab fa-pinterest" />
          </a>
        </li>
        <li>
          <a href="#instagram">
            <i className="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
    <div className="copyright">&copy; 2019 - Lazy Loading Inc.</div>
  </footer>
);

export default Footer;
