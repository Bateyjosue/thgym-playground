/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '../components/Header'
import { nanoid } from 'nanoid'

const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const MapList = () => {
   
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <section className='mt-10'>
                <ul className='list-disc mx-8 marker:text-yellow-500 text-xl'>
                    {
                        animals.map((animal)=>(
                            <li key={nanoid()}>
                                {animal}
                            </li>
                        ))
                    }

                </ul>
            </section>
        </main>
    </>
  )
}

export default MapList