import React from 'react'

function Temp() {
  return (
    <>
      <div id="header">
        <div className="container">
            <nav>
                <img src="/vite.svg" alt="Vite logo" className="logo" />
                <ul>
                <li><a href="Home">Home</a></li>
                <li><a href="AboutMe">About Me</a></li>
                <li><a href="Portfolio">Portfolio</a></li>
                <li><a href="Resume">Resume</a></li>
                <li><a href="Contact">Contact</a></li>

                </ul>
            </nav>
            <div className="header-text">
                <p>Welcome to My Portfolio</p>
                <h1>Hi, I am <span>Diana Gaston</span><br/>GitHub/ Bahashem</h1>
                <p><b>Focused-Dedicated-Creative</b></p>
            </div>
            <div className="home-icons">
                <a href="#"><i className='bx bxl-github'></i></a>
                <a href="#"><i className='bx bxl-linkedin-square'></i></a>          
                <a href="#"><i className='bx bxl-facebook-square'></i></a>
            </div>
        </div>
      </div>
    </>
  )
}

export default Temp