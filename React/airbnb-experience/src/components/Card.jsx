import star from '../assets/images/star.png';
import PropTypes from 'prop-types';



// eslint-disable-next-line react/prop-types
const Card = ({client}) => {
  // eslint-disable-next-line react/prop-types
  const {id, title, location, coverImg, price, stats,openSpots} = client
  // eslint-disable-next-line react/prop-types
  const {rating, reviewCount} = stats
  return (
    <article className='relative' id={id}>
      {!openSpots && <span className='absolute m-2 px-2 bg-gray-100 rounded-sm text-[10px] font-normal'>SOLD OUT</span>}
      
      <img src={`/src/assets/images/${coverImg}`} alt="" className='rounded-xl'/>
      <div className='flex items-center my-2 gap-1 p-1 text-xs'>
        <img src={star} alt="" className='h-3.5 w-3.5' />
        <h6 className='text-[#222]'>{rating}</h6>
        <p className='text-[#918E9B] font-light'>({reviewCount}).{location}</p>
      </div>
      <div className='text-xs font-light'>{title}</div>
      <div className='text-xs font-light flex gap-1'>
        <span className='font-semibold'>From ${price}</span>
        <span>/</span>
        <span>person</span>
      </div>
    </article>
  )
}

export default Card

Card.propsTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    openSpots: PropTypes.number.isRequired,
  })
}