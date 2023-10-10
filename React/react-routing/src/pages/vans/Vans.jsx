import { useState, useEffect } from 'react'
import './van.css'
import { Link, useSearchParams } from 'react-router-dom'
import { getVans } from '../../data/fetchData'

const Vans = () => {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get("type")

  useEffect( () =>{
    (
        async () => {
          setLoading(true)
          try{
            const vans = await getVans()
            console.log(vans)
            setVans(vans.vans)
          }
          catch(err){
            setError(err)
          }
          finally {
            setLoading(false)
          }
        }
    )()
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  if(error) {
    return <h1>{error.message}</h1>
  }

  const filterVans = typeFilter 
      ? vans.filter(van => van.type === typeFilter) 
      : vans

  return (
    <>
      <main className=' my-12'>
        <h1 className='text-4xl text-center font-bold'>Vans page goes here 🚐</h1>
        <div className='van-list-filter-buttons'>
          <button 
            className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
            onClick={()=> setSearchParams({type: 'simple'})}
            >Simple</button>
          <button 
            className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
            onClick={()=> setSearchParams({type: 'rugged'})}>Rugged</button>
          <button 
            className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
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
                  <Link to={van.id}
                    state={{
                      search: searchParams.toString(),
                      type: typeFilter
                    }}
                    >
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