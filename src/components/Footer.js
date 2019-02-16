import React from "react";

import logo from "../images/logo.png";

const Footer = props => (
  <footer>
    <a href="#home" class="logo">
      {/* <span>yay</span>
      <span>movies</span> */}
      <img src={logo} alt="logo" />
    </a>
    <div class="social-links">
      <ul>
        <li>
          <a href="#facebook">
            <i class="fab fa-facebook-square" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <i class="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#pinterest">
            <i class="fab fa-pinterest" />
          </a>
        </li>
        <li>
          <a href="#instagram">
            <i class="fab fa-instagram" />
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">&copy; 2019 - Lazy Loading Inc.</div>
  </footer>
);

export default Footer;
