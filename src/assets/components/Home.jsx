import React from "react";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="headerPic">
            {/*      <nav>
                <img src="/vite.svg" alt="Vite logo" className="logo" />
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="AboutMe">AboutMe</a></li>
                    <li><a href="Portfolio">Portfolio</a></li>
                    <li><a href="Resume">Resume</a></li>
                    <li><a href="Contact">Contact</a></li>

                </ul>
            </nav>

            */}

            <div className="header-text">
              <p>Welcome to My Portfolio</p>
              <h1>
                Hi, I am <span>Diana Gaston</span>
                <br />
                GitHub/ Bahashem
              </h1>
              <p>
                <b>Focused-Dedicated-Creative</b>
              </p>
            </div>

            <div className="home-icons">
              <a href="http://www.github.com/Bahashem">
                <i className="bx bxl-github"></i>
              </a>
              <a href="http://www.linkedin.com/in/Bahashem">
                <i className="bx bxl-linkedin-square"></i>
              </a>
              <a href="http://www.facebook.com/BahashemDigitalWorks">
                <i className="bx bxl-facebook-square"></i>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
