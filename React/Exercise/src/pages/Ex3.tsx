/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '../components/Button'
import Header from '../components/Header'

const Custom_Component = () => {
    const handleClick = (e:  React.ChangeEvent):void=> {
        e.preventDefault();
        alert(`You have clicked on ${(e.target as HTMLInputElement).textContent}`)
    }
  return (
    <>
        <Header />
        <main className='container mx-auto px-8 pt-20  '>
            <section className='mt-10 flex gap-4 justify-center'>
                {
                    Array.from({length: 3}, (_, i) => (
                        <Button key={i} name={`Button ${i+1}`} handleClick={handleClick}/>
                    ))
                }
            </section>
        </main>
    </>
  )
}

export default Custom_Component