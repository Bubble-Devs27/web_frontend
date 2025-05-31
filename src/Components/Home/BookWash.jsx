import React from 'react'
import '@fontsource-variable/lora';
import ServiceCard from './ServiceCard'
import { useCart } from '../../store/mainStore';
import { useNavigate } from 'react-router-dom'
const BookWash = () => {
  const fullWash = useCart((state)=>state.fullWash)
  const ExteriorWash =useCart((state)=>state.ExteriorWash)
  const smallWash = useCart((state)=>state.smallWash)
 const navigate = useNavigate()
  const checkLogin =() =>{
    const token = localStorage.getItem('TOKEN')
    if(token){
      navigate('/address') 
    }
    else {
      navigate('/login') 
    }
  }
 
  const washServices = [
    {_id : '2e3f4rd56ghu9s' , nameID : 'full' , title : 'Full Wash' , carPrices : [] , priceRange : '₹299 - ₹399' , originalPrice : 399 , discountPrice : 299},    
    {_id : '2e3f4rd56ghu9' , nameID : 'ext' , title : 'Exterior Wash' , carPrices : [] , priceRange : '₹299 - ₹399' , originalPrice : 299 , discountPrice : 199},    
    {_id : '2e3f4rd56ghus' , nameID : 'small' , title : 'Small Wash' , carPrices : [] , priceRange : '₹299 - ₹399',  originalPrice : 199 , discountPrice : 99}    
  ]
  return (
    <div className=''>
        <div className='text-xl text-black font-semibold sm:text-3xl' style={{fontFamily :'Lora Variable'}}>Get a car wash at your home</div>
        <div className='flex flex-col md:flex-row gap-2.5 md:gap-5 '>
          <div>
            <h1 className='mt-2 text-[18px] sm:text-xl md:text-2xl text-[#5D2821] '>Instant Services</h1> 
          <div className='flex gap-2.5'>  
          {washServices.map((service)=>(
            <ServiceCard   key={service._id} data = {service}/>
          ))}
          </div>
          </div>
          
        </div>
        <h1 className='text-gray-500 mt-3 sm:hidden'>*Click on the service to add in cart</h1>
        <h1 className='text-gray-500 mt-3 hidden sm:block'>*Add services to cart</h1>
        {fullWash >0 || ExteriorWash > 0 || smallWash  > 0 ?
         <div className='bg-[#5D2821] sm:w-[300px] rounded-[8px] py-3 text-xl text-white flex justify-center items-center mt-2.5' onClick={checkLogin}>Book Now</div>
        : 
         <div className='border-[#5D2821] border-2  sm:w-[300px] rounded-[8px] py-3 text-xp text-[#5D2821] flex justify-center items-center mt-2.5'>Choose a service to get started</div>
        }
       
       
        
    </div>
  )
}

export default BookWash