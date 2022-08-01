import React from "react";
import coverTop from "./Material/CoverTop.jpg";
import { Link } from "react-router-dom";
import "./Home.css";
import Header from "./Header";

function Home() {
  return (
    <div className="login">
      <Header />
      <div className="cover_top">
        <img className="cover" src={coverTop} alt="cover" />
        <input className="input_username" type="text" placeholder="username" />
        <input className="input_password" type="text" placeholder="password" />
        <button className="button_login">Login</button>
        <span className="new_user">
          <p>Do not have account yet?</p>
          <Link to="/register">Register</Link> |
        </span>

        <div className="copyright">Copyright © 2022</div>
      </div>
    </div>
  );
}

export default Home;
