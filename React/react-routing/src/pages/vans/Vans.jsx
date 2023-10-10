import { useState, useEffect } from 'react'
import './van.css'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../data/fetchData'

const Vans = () => {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const typeFilter = searchParams.get("type")

  const filterVans = typeFilter 
      ? vans.filter(van => van.type === typeFilter) 
      : vans

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
        <div className='van-list-filter-buttons'>
          <button 
            className='van-type simple'
            onClick={()=> setSearchParams({type: 'simple'})}
            >Simple</button>
          <button 
            className='van-type rugged'
            onClick={()=> setSearchParams({type: 'rugged'})}>Rugged</button>
          <button 
            className='van-type luxury'
            onClick={()=> setSearchParams({type: 'luxury'})}>Luxury</button>
            {
              typeFilter ? (
                <button 
                    className='van-type clear-filters'
                    onClick={()=> setSearchParams({})}>
                    Clear All
                  </button>
              ) : null
            }
          
        </div>
        <section className='van-list-container'>
          <ul className='van-list'>
            {
              filterVans.map(van => (
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