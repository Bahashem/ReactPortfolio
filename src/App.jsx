import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { About } from './assets/components/AboutMe';
import { Portfolio } from "./assets/components/Portfolio";
import { Contact } from "./assets/components/Contact";
import { Resume } from "./assets/components/Resume";
import { Footer } from "./assets/components/Footer";
import { Header } from "./assets/components/Header";

export default function App() {
  const [currentSection, setCurrentSection] = useState("About");

  const renderSection = () => {
      switch (currentSection) {
          case "Portfolio":
              return <Portfolio />;
          case "Contact":
              return <Contact />;
          case "Resume":
              return <Resume />;
          default:
              return <About />;
      }
  };

  const handleNavigation = (section) => {
      setCurrentSection(section);
  };
       

  return (
    <>
      <div className="min-h-screen bg-white text-gray-800">
        <Header 
          onNavigate={handleNavigation}
        />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <Header onNavigate={handleNavigation} />
        <main>{renderSection()}</main>
        <Footer></Footer> 
      </div>
      </>
        );
  } 