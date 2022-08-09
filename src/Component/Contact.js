import React from "react";

import "./Contact.css";
import conimage from "./Material/contact image.jpg";

function Contact() {
  return (
    <div className="contact_page">
      <img className="contactbackground" src={conimage} alt="background" />
    </div>
  );
}

export default Contact;
