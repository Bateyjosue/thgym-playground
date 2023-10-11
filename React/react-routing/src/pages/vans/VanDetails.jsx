import {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from 'react-router-dom'
import {getVan} from '../../data/fetchData'

const VanDetails = () => {
  const [vanDetails, setVanDetails] = useState({})
  const location = useLocation()
  const typeFilter = location.state?.type || 'all'

    const {id} = useParams()
    useEffect(()=> {
      try {
        (
          async () => {
            const vanDetails = await getVan(id)
            setVanDetails(vanDetails.vans)
          }
        )()
      }
      catch(err) {
        console.log(err)
      }
    }, [id])

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
