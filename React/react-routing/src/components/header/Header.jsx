// import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const navStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline #ff3028 wavy',
    color: '#fff',
    textUnderlineOffset: '5px'
}

const Header = () => {
  return (
    <header className='h-20 bg-yellow-950 text-white container mx-auto px-8 flex justify-between items-center min-w-full'>
        <h1 className='text-2xl font-bold'>
            <NavLink end
                to="/"> #VANLIFE</NavLink>
        </h1>
        <nav className='font-medium'>
            <ul className='flex gap-4'>
                <li>
                    <NavLink
                        style={({isActive})=> isActive ? navStyles : null}
                        to="/host">Host</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive})=> isActive ? navStyles : null}
                        to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink
                        style={({isActive})=> isActive ? navStyles : null}
                        to="/vans">Vans</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header