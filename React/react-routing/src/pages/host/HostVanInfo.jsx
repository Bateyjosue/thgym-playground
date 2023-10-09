// import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
    const [van] = useOutletContext()
  
  const {name,description, category, visibility} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <div className="host-van-info-container">
            <p><span className="font-bold">Name</span>:{name}</p>
            <p><span className="font-bold">Category</span>:{category}</p>
            <p><span className="font-bold">Description</span>:{description}</p>
            <p><span className="font-bold">Visibility</span>:{visibility}</p>
        </div>
  )
}

export default HostVanInfo