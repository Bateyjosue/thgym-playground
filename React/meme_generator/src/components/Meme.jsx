import React from 'react'

import memesData from '../data/memesData'

const Meme = () => {
  const [meme, setMeme] = React.useState('https://i.imgflip.com/22bdq6.jpg')
  const [memeText, setMemeText] = React.useState({
    top: "",
    bottom: "",
  })
  
  const loadRandomImage = (e) => {
    e.preventDefault()
    const memeImage = document.querySelector('#meme--image img');
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMeme( memesArray[randomNumber].url)
    memeImage.src = {meme}
  }

  const handeChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setMemeText((prevText)=>{
      return {
        ...prevText,
        [name]: value
      }
    })
  }


  return (
    <>
    <section className='container mx-auto px-8 mt-8'>
        <div  className='grid grid-cols-2 gap-4'>
            <input 
              type="text"
              name="top" 
              placeholder='Top Text ' 
              className='border rounded-md p-1.5 text-sm'
              onChange={handeChange}
              value={memeText.top}
            />
            

            <input 
                type="text" 
                name="bottom" 
                placeholder='Bottom Text'
                className='border rounded-md p-1.5 text-sm' 
                onChange={handeChange}
                value={memeText.bottom}

              />
              
            <input 
                type="submit" 
                name="image" 
                className='col-span-2 bg-gradient-to-r from-[#672280] to-[#A818DA]  rounded-sm p-1.5 text-white text-sm cursor-pointer'
                value="Get a new meme image "
                onClick={loadRandomImage}
                />
        </div>
    </section> 
    <section className='container mx-auto px-8'>
      <article
        id='meme--image' 
        className='relative rounded-xl border-2 border-[#A818DA]  my-8 flex justify-center items-center flex-col h-full'>
          <img src={meme} alt="meme random" className="max-w-[100%] h-[100%] rounded-xl"/>
          <div className='first--text absolute top-5 bg-black text-white p-2 rounded-xl text-3xl'>{memeText.top}</div>
          <div className='second--text absolute bottom-5 bg-black text-white p-2 rounded-xl text-3xl'>{memeText.bottom}</div>
      </article>
    </section>
    </>
  )
}

export default Meme