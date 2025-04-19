import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

const Header = () => {
    const location = useLocation();
    const [currentSection, setCurrentSection] = useState(location.pathname);

    return (
        <header>
            <h1>Diana Gaston (Bahashem)</h1>
            <nav>
                
          <ul>
          <li><Link to="#aboutMe"
              className={currentSection === '/' ? 'active' : ''} 
              onClick={() => setCurrentSection('/aboutMe')}
              >
              About Me
            </Link>
            </li>
            
            <li><Link to="#portfolio"      
              className={currentSection === '/portfolio' ? 'active' : ''} 
              onClick={() => setCurrentSection('/portfolio')}
              >
                    Portfolio
            </Link>
          </li>
         
          <li><Link to="#contact"  
              className={currentSection === '/contact' ? 'active' : ''} 
              onClick={() => setCurrentSection('/contact')}
              >
                  Contact
            </Link>
          </li>
          <li><Link to="#resume"
              className={currentSection === '/resume' ? 'active' : ''} 
              onClick={() => setCurrentSection('/resume')}
            >
              Resume
            </Link>
          </li>
          </ul>
          </nav>
    </header>
)};


export default Header;