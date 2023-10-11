import {Link, useLoaderData, useLocation} from 'react-router-dom'
import {getVans} from '../../data/fetchData'

export async function loader({params}){
  return await getVans(params.id)
}

const VanDetails = () => {
  const location = useLocation()
  const typeFilter = location.state?.type || 'all'

  const vanDetails = useLoaderData()

    const {name, description, imageUrl, price, type} = vanDetails
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
              {vanDetails ? (
                  <div className="van-detail">
                      <img src={imageUrl} alt=""/>
                      <i className={`van-type ${type} selected`}>{type}</i>
                      <h2>{name}</h2>
                      <p className="van-price"><span>${price}</span>/day</p>
                      <p>{description}</p>
                      <button className="link-button">Rent this van</button>
                  </div>
              ) : <h2>Loading...</h2>}
          </div>
        </main>
    </>
  )
}

export default VanDetails
