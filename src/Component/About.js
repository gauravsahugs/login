import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    const fetchMsg = async () => {
      const res = await fetch("https://localhost:5000/msg");
      const data = await res.json();

      console.log(data);
    };
    fetchMsg();
  }, []);

  return (
    <div className="about_page">
      <div> subHeader</div>
      <div>cards</div>{" "}
    </div>
  );
}

export default About;
