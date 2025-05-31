import React from 'react'
import '@fontsource/anton';
import { motion } from "motion/react";
// Supports weights 400-700
import pic from '../../assets/topbg.png'
const Hero = () => {
  return (
    <div className='flex mt-8 px-6 justify-between'>
        <motion.div className='' initial = {{x :-30 , opacity :0}} animate ={{x :0 , opacity :1}} transition={{duration :0.8}} >
            <h1 className='text-5xl md:text-7xl text-[#5D2821] tracking-widest mb-2.5 ' style={{fontFamily : 'Anton'}} >AT</h1>
            <h1 className='text-5xl md:text-7xl text-[#5D2821] tracking-widest mb-2.5' style={{fontFamily : 'Anton'}}>YOUR</h1>
            <h1 className='text-5xl md:text-7xl text-[#5D2821] tracking-widest mb-2.5' style={{fontFamily : 'Anton'}}>DOOSRTEP</h1>
        </motion.div>
        <motion.div className=' sm:h-[300px]'  initial = {{x :50 , opacity :0}} animate ={{x :0 , opacity :1}} transition={{duration :0.8}}>
          <img src={pic} className=' sm:h-full w-full'/>
        </motion.div>
    </div>
  )
}

export default Hero