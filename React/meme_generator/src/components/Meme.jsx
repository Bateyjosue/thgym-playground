import React from 'react'

import memesData from '../data/memesData'

const Meme = () => {
  // const memeImage = document.querySelector('#meme--image');

  const [meme, setMeme] = React.useState('https://i.imgflip.com/22bdq6.jpg')
  const [firstText, setFirstText] = React.useState('')
  const [secondText, setSecondText] = React.useState('')
  
  // memeImage.innerHTML = ``
  
  const loadRandomImage = (e) => {
    e.preventDefault()
    const memeImage = document.querySelector('#meme--image img');
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMeme( memesArray[randomNumber].url)
    memeImage.src = {meme}
    // memeImage.innerHTML = `<img src="${meme}" alt="meme random" class="max-w-[100%] h-[100%] rounded-xl"/>`

  }

  const addFirstText = (e) => {
    e.preventDefault()
    const memeImage = document.querySelector('#meme--image .first--text');
    setFirstText(e.target.value)
    memeImage.textContent=  firstText
  }

  const addSecondText = (e) => {
    e.preventDefault()
    const memeImage = document.querySelector('#meme--image .second--text');
    setSecondText(e.target.value)
    memeImage.textContent=   secondText
  }

  return (
    <>
    <section className='container mx-auto px-8 mt-8'>
        <div  className='grid grid-cols-2 gap-4'>
            <input 
              type="text"
              name="text-1" 
              placeholder='Text 1' 
              className='border rounded-md p-1.5 text-sm'
              onChange={addFirstText}
            />
            

            <input 
                type="text" 
                name="text-2" 
                placeholder='Text 2'
                className='border rounded-md p-1.5 text-sm' 
                onChange={addSecondText}
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
          <div className='first--text absolute top-5 bg-black text-white p-2 rounded-xl text-3xl'></div>
          <div className='second--text absolute bottom-5 bg-black text-white p-2 rounded-xl text-3xl'></div>
      </article>
    </section>
    </>
  )
}

export default Meme