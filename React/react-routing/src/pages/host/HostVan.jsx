// import React from 'react'
import { NavLink, useParams } from "react-router-dom"

const HostVan = () => {
  return (
    <div>
      <NavLink to='/host/vans' className='underline text-blue-500'>Back to vans</NavLink>
      <p>

      Host single Van {useParams().id}
      </p>
    </div>
  )
}

export default HostVan