import React from 'react'
import logo from '../assets/img/react-1.svg'

const Header = ({darkMode, toggleDarkMode}) => {
  return (
    <header className={darkMode ? 'dark' : ''}>
      <h1 className='logo'>
        <span >
          <img src={logo} alt="" srcset=""  />
        </span>
        <span>ReactFacts</span>
      </h1>
      <nav className='toggler'>
        <p className="toggler--light">Light</p>
        <div 
          className="toggler--slider"
          onClick={toggleDarkMode}
          >
            <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </nav>
    </header>
  )
}

export default Header