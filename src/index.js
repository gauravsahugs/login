import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Login from "./Component/Login";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./Component/Register";
// import About from "./Component/About";
// import Contact from "./Component/Contact";
// import Blog from "./Component/Blog";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
  // <Router>
  //   <div className="App">
  //     <Login />
  //     <App />
  //     <Routes>
  //       <Route exact path="/Register" element={<Register />}></Route>
  //       <Route exact path="/about" element={<About />}></Route>
  //       <Route exact path="/contact" element={<Contact />}></Route>
  //       <Route exact path="/blog" element={<Blog />}></Route>
  //     </Routes>
  //   </div>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
