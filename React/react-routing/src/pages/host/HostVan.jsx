import { NavLink, Link, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import {getHostVans} from "../../data/fetchData"
import { requireAuth } from "../../data/utils"
import { Suspense } from "react"

export async function loader({params, request}){
  const hostVanDetail = getHostVans(params.id)
  requireAuth(request)
  return defer({
    hostVanDetail: hostVanDetail
  })
}

const activeStyles = {
  textDecoration: 'underline wavy',
}

const HostVan = () => {
  const van = useLoaderData()

  return (
    <section className="container mx-auto ">
      <Link
        to=".."
        relative="path"
        className="back-button"
        >&larr; <span>Back to all vans</span></Link>
          <Suspense fallback={<h1 className="text-5xl font-bold">Loading...</h1>}>
            <Await resolve={van.hostVanDetail}>
              {
                (van) => {
                  const {name, imageUrl, type, price} =van
                  return ( 
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
                  )
                }
              }
            </Await>
          </Suspense>
    </section>
  )
}

export default HostVan
