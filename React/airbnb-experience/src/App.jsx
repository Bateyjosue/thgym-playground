
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Hero from './components/Hero'
import clients from '/src/data'


function Home() {

  return (
    <>
      <Header/>
      <main className='overflow-hidden w-[100%]'>
        <Hero />
        <section className='w-[120%] container mx-auto pl-8 mb-8 overflow-x-auto  lg:w-[70%]'>
          <div className="clients scroll-0 overflow-x-hidden flex gap-4  ">
            {clients.map((client, index) => (
              <Card key={index} client={client} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
