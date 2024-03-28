import React from 'react'
import HeadlineCard from './HeadlineCard'

function HeadlineCards() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6' >
        {/* Headline Cards */}
        <HeadlineCard 
            headline="Sun's Out, BOGO's Out" 
            subtext="Through 8/26" 
            buttonText="Order Now" 
            imgSrc="https://images.pexels.com/photos/2067423/pexels-photo-2067423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <HeadlineCard 
            headline="New Restaurants" 
            subtext="Added Daily" 
            buttonText="Discover" 
            imgSrc="https://images.pexels.com/photos/17592702/pexels-photo-17592702/free-photo-of-close-up-of-a-dish-with-guacamole-standing-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <HeadlineCard 
            headline="We Deliver Deserts Too" 
            subtext="Tastry Treats" 
            buttonText="Order Now" 
            imgSrc="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
    </div>
  )
}

export default HeadlineCards