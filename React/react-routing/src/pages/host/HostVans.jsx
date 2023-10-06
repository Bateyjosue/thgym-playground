// import React from 'react'

import { NavLink } from "react-router-dom"

const HostVans = () => {
  return (
    <>
      <NavLink to='/host/vans/1' className='underline text-blue-500'>
        <h1>Host Vans 1</h1>
      </NavLink>
      <NavLink to='/host/vans/2' className='underline text-blue-500'>
        <h1>Host Vans 2</h1>
      </NavLink>
      <NavLink to='/host/vans/3' className='underline text-blue-500'>
        <h1>Host Vans 3</h1>
      </NavLink>
    </>
  )
}

export default HostVans