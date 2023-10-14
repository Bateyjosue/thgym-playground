import {Await, Link, defer, useLoaderData, useLocation} from 'react-router-dom'
import {getVans} from '../../data/fetchData'
import { Suspense } from 'react'

export async function loader({params}){
  const vanData = getVans(params.id)
  return defer({
    van: vanData,
  })
}

const VanDetails = () => {
  const location = useLocation()
  const typeFilter = location.state?.type || 'all'
  const vanDetails = useLoaderData()

  return (
    <>
        <main className='container mx-auto'>
          <div className="van-detail-container">
            <Link 
              to={`..?${location.state ? location.state.search : ''}`}
              relative='path'
              className='back-button hover:underline'>
                &larr; Back to {typeFilter} vans
            </Link>
              <Suspense fallback={<h1 className='text-5xl font-bold'>Fetching...</h1>}>
                <Await resolve={vanDetails.van}>
                  {(vanDetail) => {
                      const {name, description, imageUrl, price, type} = vanDetail
                        return (
                          <div className="van-detail">
                            <img src={imageUrl} alt=""/>
                            <i className={`van-type ${type} selected`}>{type}</i>
                            <h2>{name}</h2>
                            <p className="van-price"><span>${price}</span>/day</p>
                            <p>{description}</p>
                            <button className="link-button">Rent this van</button>
                        </div>
                        )
                    }
                  }
                </Await> 
            </Suspense>
          </div>
        </main>
    </>
  )
}

export default VanDetails
