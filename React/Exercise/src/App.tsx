import Exercise from './components/Exercise.jsx'
import questions from './data/data'

function Home() {
  Exercise

  return (
    <>
      <main className="container mx-auto px-4 my-10">
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {
            questions.map((el, i) => (
              <Exercise key={i} {...el}/>
            ))
          }
        </section>
      </main>
      
    </>
  )
}

export default Home
