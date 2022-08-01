import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";
import Register from "./Component/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
