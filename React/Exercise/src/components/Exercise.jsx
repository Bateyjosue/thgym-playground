import React from 'react'
import { NavLink } from 'react-router-dom'

const Exercise = (exercise) => {
    const {link, title, description} = exercise
  return (
    <>
        <article className="p-1 border rounded-xl">
            <NavLink to={`/${link}`}>
              <h2 className="text-lg font-bold">{title}</h2>
            </NavLink>
            <p className="text-light text-sm my-2">
            {description}
            </p>
            <ul className="list text-xs flex gap-1 ">
                
            </ul>
          </article>
    </>
  )
}

export default Exercise