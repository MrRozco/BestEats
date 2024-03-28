import React from 'react'
import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'
import { BsFillSaveFill } from 'react-icons/bs'


function Navbar() {

  const [ nav, setNav ] = useState(false);

  return (
    <div className = 'max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className = 'cursor-pointer mr-2'>
                <AiOutlineMenu size={30} />
            </div>
            
            <h1 className= 'text-2xl sm:text-3xl lg:text-4xl px-2 mr-2'>
              Best <spans className='font-bold'>Eats</spans></h1>    
        
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer'>
                <p className='bg-black text-white rounded-full p-2' >Delivery</p>
                <p className='p-2 ' >Pickup</p>
            </div>
        </div>

        {/* Search bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]' >
          <AiOutlineSearch size={25} />
          <input className='bg-transparent p-2 focus:outline-none ' type='text' placeholder='Search foods' />
        </div>

        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full hover:scale-105 duration-300' >
          <BsFillCartFill size={30} className='mr-2' />
          Cart
        </button>
      {/* Mobile Menu */}
      
      {/* Overylay*/}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0' ></div> : '' }

      {/* SideDrawer menu*/}
      <div className= {nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'} >
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='cursor-pointer absolute top-4 right-4' />
        <h2 className='p-4 text-2xl'>Best <span className='font-bold '>Eats</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800' >
            <li className='text-xl flex py-4 cursor-pointer mt-4'><MdFavorite className='mr-4' size={25} /> Favorites</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><TbTruckDelivery className='mr-4' size={25} /> Order</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><FaWallet className='mr-4' size={25} /> Wallet</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><MdHelp className='mr-4' size={25} /> Help</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><AiFillTag className='mr-4' size={25} /> Promotions</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><BsFillSaveFill className='mr-4' size={25} /> Best Ones</li>
            <li className='text-xl flex py-4 cursor-pointer mt-4'><FaUserFriends className='mr-4' size={25} /> Invite Friends</li>
          </ul>
        </nav>
      </div>
      

  </div>
  )
}

export default Navbar