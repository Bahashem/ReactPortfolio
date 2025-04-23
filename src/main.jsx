import ReactDOM from 'react-dom/client';
import React from 'react';  
import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import AboutMe from './assets/components/AboutMe.jsx';
import Contact from './assets/components/Contact.jsx';
import Portfolio from './assets/components/Portfolio.jsx';
import Resume from './assets/components/Resume.jsx';

const router = createBrowserRouter([
    { 
      path: '/',
      element: <App />,
      errorElement: <div>404 Not Found</div>,
      children: [
        {
          index: true,
          element: <AboutMe />
        },
        { 
          path: '/contact',
          element: <Contact />
        },
        { 
          path: '/portfolio',
          element: <Portfolio />
        },
        { 
          path: '/resume',
          element: <Resume />
        }
      ] 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
