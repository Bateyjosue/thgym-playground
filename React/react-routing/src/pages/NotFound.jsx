import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section>
        <h1 className='text-4xl text-center font-bold mt-12'>404</h1>
        <h2 className='text-center text-gray-600'>Page not found</h2>
        <div className="mx-auto w-[90%] text-center my-12">
            <Link to='/' className='link-button bg-[#422006] py-4 rounded-md text-white text-center'>
                <button className="w-96 mx-auto font-semibold text-2xl">
                    Go home
                </button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound