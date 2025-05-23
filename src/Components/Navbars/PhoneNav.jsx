import React from 'react'
import { motion } from "motion/react";
import Divider from '../Divider/Divider';
import {  Link } from 'react-router-dom';
const PhoneNav = () => {
  return (
    <>
    <motion.div className="sm:hidden bg-transparent" initial = {{y :-30 , opacity :0}} animate ={{y :0 , opacity :1}} transition={{duration :0.8 ,delay :1}}  >
      {/* Navbar container */}
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-red-900 font-semibold text-2xl">
          BubbleXwash
        </div>
        
        {/* Right side buttons with divider */}
        <div className="flex items-center">
          {/* Bell notification button */}
          <Link to ='/notification' className="p-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#5D2821" xmlns="http://www.w3.org/2000/svg" className="text-[#5D2821]">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          
          {/* Divider line */}
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          {/* Dropdown menu button */}
          <button className="p-0.5 bg-[#5D2821] rounded-2xl"  >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#F7EFDD]">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </motion.div>
    {/* Desktop NaV */}
    <motion.div className='hidden sm:flex justify-between px-6' initial = {{y :-30 , opacity :0}} animate ={{y :0 , opacity :1}} transition={{duration :0.8 ,delay :1}} >
        <div className='text-red-900 font-semibold text-2xl  flex justify-center items-center'> BubbleXwash </div>
        <div className=' text-red-900 flex justify-center items-center'> 
            <Link to='/services' className='px-5 py-3'>Services</Link>
            <Link to='/packages' className='px-5 py-3'>Packages</Link>
            <Link to='/orders' className='px-5 py-3'>Orders</Link>
            <Link to="/admin" className="h-6 w-px bg-gray-300 mx-2"></Link>

           {/* Bell notification button */}
          <Link className="p-2" to ="/notification">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#5D2821" xmlns="http://www.w3.org/2000/svg" className="text-[#5D2821]">
              <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to='/login'>LOGIN</Link>
         </div>
        
    </motion.div>
    </>
  )
}

export default PhoneNav