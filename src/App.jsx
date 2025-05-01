
import './App.css'

import Footer from "./assets/components/Footer.jsx";
import  Header from "./assets/components/Header.jsx";
import { Outlet } from 'react-router-dom';

export default function App() {


  return (
    <>
      <div className="min-h-screen bg-green text-white-800">
        <Header />
        <Outlet />

      </div>

      </>
        );
  } 