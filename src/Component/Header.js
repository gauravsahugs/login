import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <ul className="nav">
        <li>
          <Link to="/about">About</Link> |
        </li>
        <li>
          <Link to="/blog">Blog</Link> |
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>{" "}
      </ul>
    </div>
  );
}

export default Header;
