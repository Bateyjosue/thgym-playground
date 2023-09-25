import logo from '../assets/images/airbnb-logo.png';

const Header = () => {
  return (
    <header className='h-20 shadow-lg shadow-gray-500 flex container mx-auto px-8 py-6'>
        <img src={logo} alt="" className='' />
    </header>
  )
}

export default Header