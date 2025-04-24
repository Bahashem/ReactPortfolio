import React from 'react';  
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
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
          element: <AboutMe />,
        },
        { 
          path: '/Contact',
          element: <Contact />,
        },
        { 
          path: '/Portfolio',
          element: <Portfolio />,
        },
        { 
          path: '/Resume',
          element: <Resume />,
        }
      ] 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
);
