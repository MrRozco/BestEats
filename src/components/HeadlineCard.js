import React from 'react'

function HeadlineCard({ headline, subtext, buttonText, imgSrc }) {
    return (
      <div className='rounded-xl relative hover:scale-105 duration-300' > 
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white' >
              <p className='font-bold text-2xl px-2 pt-4' >{headline}</p>
              <p className='px-2' >{subtext}</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4' >{buttonText}</button>
          </div>
          <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={imgSrc} alt='headline' />
      </div>
    )
  }

export default HeadlineCard