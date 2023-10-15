import Header from '../components/Header'


function HelloWorld(){
  return (
    <>
        <Header />
        <main className='bg-yellow-400 max-h-full min-h-[100vh] flex items-center justify-center'>
            <h1 className='text-2xl'>Hello, World!</h1>
        </main>
    </>
  )
}

export default HelloWorld