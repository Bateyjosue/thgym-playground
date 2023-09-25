import grid from '../assets/images/photo-grid.png'

const Hero = () => {
  return (
    <section className='container mx-auto px-8 py-7 flex flex-col'>
      <img src={grid} alt="" className='w-4/5 mx-auto mb-8'/>
      <div>
        <h2 className='text-3xl font-semibold'>Online Experiences</h2>
        <p className='text-base font-light w-72 py-4'>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
    </section>
  )
}

export default Hero