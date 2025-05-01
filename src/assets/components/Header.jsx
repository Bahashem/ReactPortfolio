import React from "react";
import { Link } from "react-router-dom";
//import AboutMe from "./AboutMe";
//import Portfolio from "./Portfolio";
//import Contact from "./Contact";
//import Resume from "./Resume";
//import Footer from "./Footer";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">Diana Gaston (Bahashem)</h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Portfolio">Portfolio</Link>
          </li>

          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
