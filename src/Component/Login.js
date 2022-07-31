import React from "react";

import coverTop from "./Material/CoverTop.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="header">
        <div className="button_group">
          <button className="button_aboutus">About Us</button>
          <button className="button_contact">Contact</button>
          <button className="button_policy">Privacy Policy</button>
          <button className="button_blog">Blog</button>
        </div>
        <div className="cover_top">
          <img className="cover" src={coverTop} alt="cover" />
          <input
            className="input_username"
            type="text"
            placeholder="username"
          />
          <input
            className="input_password"
            type="text"
            placeholder="password"
          />
          <button className="button_login">Login</button>

          <div className="copyright">Copyright © 2022</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
