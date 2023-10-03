import { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import '../../components/Van/van/'

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
            <section className='van-list-container'>

            </section>
            <ul className='van-list'>
                {
                    vans.map(van => (
                        <li key={van.id} className="van-tile">
                            <img src={van.imageUrl} alt="Van Avatar" />
                            <div className="van-info mb-2">
                                <h3 className='font-bold'>{van.name}</h3>
                                <p>${van.price}<span>/day</span></p>
                            </div>
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        </li>
                    ))
                }
            </ul>
        </main>
    </>
  )
}

export default Vans