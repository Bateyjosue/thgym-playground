// import React from 'react'
import { useOutletContext } from "react-router-dom"

const HostVanInfo = () => {
    const [van] = useOutletContext()
  
  const {name,description, type} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <section className="host-van-detail-info">
        <h4><span className="font-bold">Name</span>: {name}</h4>
        <h4><span className="font-bold">Category</span>: {type}</h4>
        <h4><span className="font-bold">Description</span>: {description}</h4>
        <h4><span className="font-bold">Visibility</span>: Public</h4>
    </section>
  )
}

export default HostVanInfo