import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed container mx-auto px-8 py-8 bg-black text-white max-w-full'>
        <NavLink to='/'>
            <span class="material-symbols-outlined text-3xl">cottage</span>
        </NavLink>
    </header>
  )
}

export default Header