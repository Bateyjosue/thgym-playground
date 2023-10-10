import { NavLink, Outlet } from 'react-router-dom'
import './layout.css'

const navStyles = {
  background: 'rgb(66 32 6)',
  opacity: '.2',
  color: 'white',
}

const HostLayout = () => {
  return (
    <>
        <nav className="host-nav my">
            <NavLink 
              end
              style={({isActive})=> isActive ? navStyles : null}
              to=".">Dashboard</NavLink>
            <NavLink 
              style={({isActive})=> isActive ? navStyles : null}
              to="/host/income">Income</NavLink>
            <NavLink 
              style={({isActive})=> isActive ? navStyles : null}
              to="/host/vans">Vans</NavLink>
            <NavLink 
              style={({isActive})=> isActive ? navStyles : null}
              to="/host/reviews">Reviews</NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout