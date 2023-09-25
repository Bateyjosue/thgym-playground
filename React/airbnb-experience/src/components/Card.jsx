import imgs from '../assets/images/katie-zaferes.png';
import star from '../assets/images/star.png';

const Card = () => {
  return (
    <article>
      <span className='absolute m-2 px-2 bg-gray-100 rounded-sm text-[10px] font-normal'>SOLD OUT</span>
      <img src={imgs} alt="" className='rounded-xl'/>
      <div className='flex items-center my-2 gap-1 p-1 text-xs'>
        <img src={star} alt="" className='h-3.5 w-3.5' />
        <h6 className='text-[#222]'>5.0</h6>
        <p className='text-[#918E9B] font-light'>(9).USA</p>
      </div>
      <div className='text-xs font-light'>Life lessons with Katie Zaferes</div>
      <div className='text-xs font-light flex gap-1'>
        <span className='font-semibold'>From $136</span>
        <span>/</span>
        <span>person</span>
      </div>
    </article>
  )
}

export default Card