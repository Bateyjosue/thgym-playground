import Header from '../components/Header'
import Joke from '../components/Joke'
import jokes from '../data/joke.json'

const RenderingJson = () => {
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20'>
            <section className='mt-10'>
            {
                jokes.map((joke) => {
                    return (
                        <Joke key={joke.id} {...joke}/>
                    )
                })
            }
            </section>
        </main>
    </>
  )
}

export default RenderingJson