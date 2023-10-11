import './van.css'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../data/fetchData'

export async function loader(){
  // const  vans= await getVans()
  console.log(await getVans())
  return await getVans()
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const vans = useLoaderData()
  const typeFilter = searchParams.get("type")

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