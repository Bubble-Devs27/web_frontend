import React from 'react'
import '@fontsource-variable/lora';
import ServiceCard from './ServiceCard'
const BookWash = () => {
  const washServices = [
    {_id : '2e3f4rd56ghu9s' , nameID : 'fullwash' , title : 'Full Wash' , carPrices : [] , priceRange : '₹299 - ₹399' , originalPrice : 299 , discountPrice : 399},    
    {_id : '2e3f4rd56ghu9s' , nameID : 'fullwash' , title : 'Exterior Wash' , carPrices : [] , priceRange : '₹299 - ₹399' , originalPrice : 199 , discountPrice : 299},    
    {_id : '2e3f4rd56ghu9s' , nameID : 'fullwash' , title : 'Full Wash' , carPrices : [] , priceRange : '₹299 - ₹399',  originalPrice : 399 , discountPrice : 299}    
  ]
  return (
    <div>
        <div className='text-xl text-black font-semibold sm:text-3xl' style={{fontFamily :'Lora Variable'}}>Get a car wash at your home</div>
        <div className='flex flex-col md:flex-row gap-2.5 md:gap-5 '>
          <div>
            <h1 className='mt-2 text-[18px] sm:text-xl md:text-2xl text-[#5D2821] '>Instant Services</h1> 
          <div className='flex gap-2.5'>  
          {washServices.map((service)=>(
            <ServiceCard data = {service}/>
          ))}
          </div>
          </div>
          
          {/* <div className='bg-white'>
             <h1 className='mt-2 text-[18px] sm:text-xl md:text-2xl text-[#5D2821] '>Packages</h1>
             <h1 className=' text-[12px] sm:text-[16px] md:text-[17px] text-gray-600 '>Pay once , subscription model</h1>

          </div>   */}
        </div>
    </div>
  )
}

export default BookWash