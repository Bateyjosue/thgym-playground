import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

const VanDetails = () => {
  const [vanDetails, setVanDetails] = useState({})
    const {id} = useParams()
    useEffect(()=> {
      fetch(`/api/vans/${id}`)
      .then(res => res.json())
      .then(data => setVanDetails(data.vans))
    }, [id])

    const {name, description, imageUrl, price, type} = vanDetails
  return (
    <>
        <main className='container mx-auto'>
          <div className="van-detail-container">
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