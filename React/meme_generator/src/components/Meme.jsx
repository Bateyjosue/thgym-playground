import React from 'react'

import memesData from '../data/memesData'

const Meme = () => {
  const loadRandomImage = (e) => {
    e.preventDefault()
    const memeImage = document.querySelector('#meme--image');
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    memeImage.innerHTML = `<img src="${memesArray[randomNumber].url}" alt="meme random" class="max-w-[100%] h-[100%] rounded-xl"/>`

  }
  return (
    <>
    <section className='container mx-auto px-8 mt-8'>
        <div  className='grid grid-cols-2 gap-4'>
            <input 
            type="text"
            name="text-1" 
            placeholder='Text 1' 
            className='border rounded-md p-1.5 text-sm'/>

            <input 
              type="text" 
              name="text-2" 
              placeholder='Text 2'
              className='border rounded-md p-1.5 text-sm' />
              
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
      <article id='meme--image' className='rounded-xl border-2 border-[#A818DA]  my-8 flex justify-center items-center h-full'>
      </article>
    </section>
    </>
  )
}

export default Meme