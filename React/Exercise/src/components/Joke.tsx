
interface Joke {
    setup: string;
    punchline: string
}

const Joke = ({setup, punchline}:Joke) => {
  return (
    <article className='mb-10 border p-3 rounded-lg'>
        <h1 className='text-3xl font-bold mb-4'>{setup}</h1>
        <p className='mb-4'>{punchline}</p>
    </article>
  )
}

export default Joke