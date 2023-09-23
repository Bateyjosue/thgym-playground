import React from 'react'
import NavBar from './NavBar'
import logo from '../img/react-1.svg'

const Header = () => {
  return (
    <>
      <h2 className='logo'>
        <span >
          <img src={logo} alt="" srcset=""  />
        </span>
        <span>ReactFacts</span>
      </h2>
      <nav>
        <NavBar/>
      </nav>
    </>
  )
}

export default Header