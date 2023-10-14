import { Await, NavLink, defer, useLoaderData } from "react-router-dom"
import './host.css'
import { getHostVans } from '../../data/fetchData'
import { requireAuth } from "../../data/utils"
import { Suspense } from "react"

export  function loader({request}){
    const hostVanData =  getHostVans()
    requireAuth(request)
    return defer({
        hostVans: hostVanData
    })
}

const HostVans = () => {
  const vans = useLoaderData()

    return (
        <section>
            <h1 className="host-vans-title text-5xl font-bold my-4">Your listed vans</h1>
            <div className="host-vans-list">
                <section>
                    <Suspense fallback={<h1 className="text-5xl font-bold">Loading...</h1>}>
                        <Await resolve={vans.hostVans}>
                            { (hostVans)=>{
                                    return (
                                        hostVans.map(van => (
                                            <NavLink
                                                to={van.id}
                                                key={van.id}
                                                className="host-van-link-wrapper"
                                            >
                                                <div className="host-van-single" key={van.id}>
                                                    <img src={van.imageUrl} alt="vans avatar" />
                                                    <div className="host-van-info">
                                                        <h3>{van.name}</h3>
                                                        <p>${van.price}/day</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))
                                    )
                                }
                            }
                        </Await>
                    </Suspense>
                </section>
            </div>
        </section>
    )
}

export default HostVans