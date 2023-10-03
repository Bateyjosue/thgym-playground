import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'

const Vans = () => {
    const [vans, setVans] = useState([])

    useEffect(() =>{
        fetch('/api/vans')
        .then(res => res.json())
        .then(data => setVans(data.vans))
        .catch(err => console.log(`Network ERROR ${err.message}`))
    }, [])
  return (
    <>
        <Header />
        <main className='mx-20 my-12'>
            <h1>Vans page goes here 🚐</h1>
            <ul className='list-disc'>
                {
                    vans.map(van => (
                        <li key={van.id}>
                            {/* <Link to={`/vans/${van.id}`}>{van.name}</Link> */}
                            {van.name}
                        </li>
                    ))
                }
            </ul>
        </main>
    </>
  )
}

export default Vans