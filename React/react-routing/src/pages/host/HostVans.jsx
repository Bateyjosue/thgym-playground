import { NavLink, useLoaderData } from "react-router-dom"
import './host.css'
import { getHostVans } from '../../data/fetchData'
import { requireAuth } from "../../data/utils"

export async function loader(){
    const auth = await requireAuth()
    if(auth != null) {
        return requireAuth()
    }
    return getHostVans()
}

const HostVans = () => {
  const vans = useLoaderData()

    const hostVansEls = vans.map(van => (
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

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>
                    ) : (
                            <h2>Loading...</h2>
                        )
                }
            </div>
        </section>
    )
}

export default HostVans