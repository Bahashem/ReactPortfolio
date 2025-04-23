import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import AboutMe  from './assets/components/AboutMe';
//import  Portfolio  from "./assets/components/Portfolio";
//import  Contact  from "./assets/components/Contact.jsx";
//import  Resume  from "./assets/components/Resume.jsx";
import Footer from "./assets/components/Footer.jsx";
import  Header from "./assets/components/Header.jsx";
import { Outlet } from 'react-router-dom';

export default function App() {
  //const [currentSection, setCurrentSection] = useState("About");

  /*
  const renderSection = () => {
      switch (currentSection) {
          case "Portfolio":
              return <Portfolio />;
          case "Contact":
              return <Contact />;
          case "Resume":
              return <Resume />;
          default:
              return <AboutMe />;
      }
  };

  const handleNavigation = (section) => {
      setCurrentSection(section);
  };
  */    

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        { /* <Header 
          onNavigate={handleNavigation}
        /> */}
        <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <Outlet />
      </div>
      { /*<div>
        <Header onNavigate={handleNavigation} />
        <main>{renderSection()}</main>
        <Footer></Footer> 
      </div> */ }

        <Footer />
      </>
        );
  } 