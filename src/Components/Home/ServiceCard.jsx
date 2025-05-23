import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({data}) => {
  
  return (
   
    <Link to='/services' className="bg-[#FEF9ED]  h-24 w-28 sm:h-48 sm:w-64 rounded-xl text-center py-4 justify-center items-center mt-2.5">
      <h1 className='text-[16px] sm:text-2xl md:text-3xl text-[#5D2821] font-bold'> {data.title} </h1> 
      <h1 className='text-[15px] sm:text-xl md:text-2xl text-gray-700'> ₹{data.discountPrice} <span className='line-through text-[12px] sm:text-[16px] md:text-xl'>₹{data.originalPrice} </span> </h1>
      </Link>
      
  
  )
}

export default ServiceCard