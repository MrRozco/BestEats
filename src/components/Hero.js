import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4' >
        <div className='max-h-[500px] relative' >
            {/* Overlay*/}
            <div className='absolute w-full h-full text-gray-200 m-h-[500px] flex flex-col justify-center bg-black/40' >
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ' >The <span className='text-orange-500' >Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl ' ><span className='text-orange-500' >Foods</span> Delivered</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='hero' />
        </div>
    </div>
  )
}

export default Hero