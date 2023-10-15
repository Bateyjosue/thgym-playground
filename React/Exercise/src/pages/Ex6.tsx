import Animal from '../components/Animal'
import Header from '../components/Header'

const animals: string[]= ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
const MapListComponent = () => {
   
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <section className='mt-10'>
                <ul className='list-disc mx-8 marker:text-yellow-500 text-xl'>
                    {
                    <Animal animals={animals} />
                    }

                </ul>
            </section>
        </main>
    </>
  )
}

export default MapListComponent