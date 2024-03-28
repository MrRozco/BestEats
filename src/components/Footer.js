import React from 'react'
import appStoreLogo from '../media/download-on-the-app-store-logo-png-23.png';
import googleStoreLogo from '../media/R.png';


function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto flex flex-col justify-between items-center p-4 border-t-[1px] border-gray-200' >
        <div className='m-auto flex justify-between w-full sm:w-3/5' >
            <div >
                <div> <h1 className= 'text-2xl sm:text-3xl lg:text-4xl px-2 mr-2'>
              Best <spans className='font-bold'>Eats</spans></h1>  </div>
                <div className='hidden md:flex gap-1 mt-20' >
                    <img className='  max-h-[40px] lg:max-h-[40px] w-full object-cover' src={appStoreLogo} alt='Apple Logo' />
                    <img className='max-h-[40px] lg:max-h-[40px] w-full object-cover' src={googleStoreLogo} alt='Google Logo' />
                </div>
            </div>
            <div className='flex gap-14'>
                <div className='flex flex-col gap-6'>
                    <a href='/'>Company</a>
                    <a href='/'>Contact Us</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Terms of Service</a>
                </div>
                <div className='flex flex-col gap-6'>
                    <a href='/'>Get Help</a>
                    <a href='/'>FAQs</a>
                    <a href='/'>Our Blogs</a>
                </div>
            </div>
        </div>
        <div className='m-auto mt-4 flex justify-between w-full sm:w-3/5 border-t-[1px] border-gray-200' > 
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Footer