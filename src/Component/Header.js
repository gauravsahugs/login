import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <Link to="/" className="navbtn">
            Home
          </Link>
        </li>
        <li className="navbtn">
          <Link to="/about" className="navbtn">
            About
          </Link>
        </li>
        <li className="navbtn">
          <Link to="/blog" className="navbtn">
            Blog
          </Link>
        </li>
        <li className="navbtn">
          <Link to="/contact" className="navbtn">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
