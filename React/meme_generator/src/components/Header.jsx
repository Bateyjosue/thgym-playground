import React from 'react'
import logo from '../assets/images/Troll.png'

const Header = () => {
  return (
    <header className='container mx-auto px-8 h-20 bg-gradient-to-r from-[#672280] to-[#A818DA] text-white flex justify-between items-center'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="" srcset="" className='w-8' />
            <h2 className='text-xl font-bold'>Meme Generator</h2>
        </div>
        <nav className='text-sm'>
            <h3>React Course - Project 3</h3>
        </nav>
    </header>
  )
}

export default Header