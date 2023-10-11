import { NavLink, Link, Outlet, useLoaderData } from "react-router-dom"
import {getHostVans} from "../../data/fetchData"
import { requireAuth } from "../../data/utils"

export async function loader({params}){
  const auth = await requireAuth()
    if(auth != null) {
        return requireAuth()
    }
  return getHostVans(params.id)
}

const activeStyles = {
  textDecoration: 'underline wavy',
}

const HostVan = () => {
  const van = useLoaderData() || []

  const {name, imageUrl, type, price} = van

  if (!van) {
    return <h1>Loading...</h1>
}
  return (
    <section className="container mx-auto ">
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
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => isActive ? activeStyles : null}>
              Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => isActive ? activeStyles : null}>
              Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => isActive ? activeStyles : null}>
              Photos
          </NavLink>
        </nav>
        <Outlet context={[van]}/>
      </div>
    </section>
  )
}

export default HostVan