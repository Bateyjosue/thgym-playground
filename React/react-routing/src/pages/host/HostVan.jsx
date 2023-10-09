// import React from 'react'
import { useEffect, useState } from "react"
import { NavLink, Link, Outlet, useParams } from "react-router-dom"
import {getHostVan} from "../../data/fetchData"

const active = {
  textDecoration: 'underline',
}

const HostVan = () => {
  const [van, setVan] = useState([])
  const {id} = useParams()


  useEffect(() => {
    try{
      (
        async() => {
          const van = await getHostVan(id)
          setVan(van.vans)
        }
      )()
    }
    catch(err){
      console.log(err);
    }
  }, [id])
  const {name, imageUrl, type, price} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <section className="container mx-auto">
      <Link
        to=".."
        relative="path"
        className="back-button"
        >&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
              <img src={imageUrl} alt="" />
              <div className="host-van-detail-info-text">
                  <i
                      className={`van-type van-type-${type}`}
                  >
                      {type}
                  </i>
                  <h3>{name}</h3>
                  <h4>${price}/day</h4>
              </div>
          </div>
      </div>
      <div className="mini-nav flex gap-4 my-4">
        <NavLink
        end 
        to={`/host/vans/${id}`}
        style={({isActive}) => { isActive? active : null}}
        >
          <div className="mini-nav-item">
            <i className="fas fa-info-circle"></i>
            <span>Info</span>
          </div>
        </NavLink>
        <NavLink to={`/host/vans/${id}/pricing`}
          style={({isActive}) => { isActive? active : null}}
        >
          <div className="mini-nav-item">
            <i className="fas fa-dollar-sign"></i>
            <span>Pricing</span>
          </div>
        </NavLink>
        <NavLink to={`/host/vans/${id}/photos`}
          style={({isActive}) => { isActive? active : null}}
        >
          <div className="mini-nav-item">
            <i className="fas fa-images"></i>
            <span>Photos</span>
          </div>
        </NavLink>
      </div>
      <Outlet context={[van]}/>
    </section>
  )
}

export default HostVan