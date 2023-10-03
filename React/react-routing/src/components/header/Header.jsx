// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
        <h1>
            <Link to="/"> #VANLIFE</Link>
        </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/vans">Vans</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header