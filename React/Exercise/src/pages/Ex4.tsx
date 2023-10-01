/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import Header from '../components/Header'


const StateProps = () => {
    const [count, setCount] = useState(0)
    const handleClick = (e: Event) => {
        e.preventDefault();
        setCount(()=> count+1)
    }
    const handleClear = (e:Event) => {
        e.preventDefault()
        setCount(0)
    }
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20  '>
            <section className='mt-10 text-center'>
                <h2 className='text-2xl'>Button has been clicked: {count} time{count>1 && 's'}</h2>
                <button onClick={handleClick} className='border rounded-md p-2 my-4 bg-yellow-800 text-white font-bold'>Click me</button>
                <button onClick={handleClear} className='border rounded-md p-2 my-4 bg-red-800 text-white font-bold'>Clear</button>
            </section>
        </main>
    </>
  )
}

export default StateProps