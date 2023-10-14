import './van.css'
import { Link, useLoaderData, useSearchParams, defer, Await } from 'react-router-dom'
import { getVans } from '../../data/fetchData'
import { Suspense } from 'react'

export async function loader(){
  const vansData = getVans()
  return defer(
    {
      vans: vansData
    }
  )
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get("type")
  const vans = useLoaderData()

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
            <Suspense fallback={<h1 className='text-5xl font-bold'>Loading...</h1>}>
              <Await resolve={vans.vans}>
                {
                  (loadVans)=> {
                    const filterVans = typeFilter 
                      ? loadVans.filter(van => van.type === typeFilter) 
                      : loadVans
                    return (
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
                    )
                  }
                }
              </Await>
            </Suspense>
          </ul>
        </section>
      </main>
    </>
  )
}

export default Vans
