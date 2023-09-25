import logo from '../assets/images/airbnb-logo.png';
const Header = () => {
  return (
    <header className='h-[70px] max-w-[100%] shadow-lg shadow-gray-200 flex container mx-auto px-8 py-6'>
        <img src={logo} alt="" className='' />
    </header>
  )
}

export default Header