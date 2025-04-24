import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
//import AboutMe from "./AboutMe";
//import Portfolio from "./Portfolio";
//import Contact from "./Contact";
//import Resume from "./Resume";
//import Footer from "./Footer";

const Header = () => {
    { /*}
  const location = useLocation();
  const [currentSection, setCurrentSection] = useState(location.pathname);
  const renderPage = () => {
    if (currentPage === "Header") {
      return <Header />;
    }
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }

    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  */ }

  return (
    <header>
      <h1>Diana Gaston (Bahashem)</h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
             // className={currentSection === "/" ? "active" : ""}
             // onClick={() => setCurrentSection("/AboutMe")}
            >
              About Me
            </Link>
          </li>

          <li>
            <Link
              to="/Portfolio"
             // className={currentSection === "/Portfolio" ? "active" : ""}
             // onClick={() => setCurrentSection("/Portfolio")}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
             // className={currentSection === "/Contact" ? "active" : ""}
             //onClick={() => setCurrentSection("/Contact")}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
             // className={currentSection === "/Resume" ? "active" : ""}
             // onClick={() => setCurrentSection("/Resume")}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
