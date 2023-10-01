/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '../components/Header'

const UserCLicks = () => {
    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('You have clicked me')
    }
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <button 
                onClick={handleClick}
                className='mt-10 border border-white bg-yellow-700 hover:bg-purple-950 uppercase font-semibold text-white px-4 py-2 rounded-md flex items-center gap-2'>
                Click on me!
                <span className="material-symbols-outlined">ads_click</span>
            </button>
        </main>
    </>
  )
}

export default UserCLicks