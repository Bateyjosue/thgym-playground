import { useState, useEffect } from 'react'
import './van.css'
import { Link } from 'react-router-dom'
import { getVans } from '../../data/fetchData'

const Vans = () => {
    const [vans, setVans] = useState([])

    useEffect( () =>{
        try{
            (
                async () => {
                    const vans = await getVans()
                    setVans(vans.vans)
                }
            )()
        }
        catch(err){
            console.log(err)
        }
    }, [])
  return (
    <>
        <main className=' my-12'>
            <h1 className='text-4xl text-center font-bold'>Vans page goes here 🚐</h1>
            <section className='van-list-container'>
                <ul className='van-list'>
                    {
                        vans.map(van => (
                            <li key={van.id} className="van-tile">
                                <Link to={van.id}>
                                    <img src={van.imageUrl} alt="Van Avatar" />
                                    <div className="van-info mb-2">
                                        <h3 className='font-bold'>{van.name}</h3>
                                        <p>${van.price}<span>/day</span></p>
                                    </div>
                                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </section>
        </main>
    </>
  )
}

export default Vans