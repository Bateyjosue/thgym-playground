// import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='h-20 bg-yellow-950 text-white container mx-auto px-8 flex justify-between items-center min-w-full'>
        <h1 className='text-2xl font-bold'>
            <Link to="/"> #VANLIFE</Link>
        </h1>
        <nav className='font-medium'>
            <ul className='flex gap-4'>
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