import React, { useState } from 'react'
import { motion } from "motion/react";
import '@fontsource-variable/lora';
import BookWash from './BookWash';
import WashActive from './WashActive';
const GetWash = () => {
  //Check if Token available? then check if wash Booked ?  yes => show wash details , No => show wash booking form
  const [isActive , setActive] = useState(false)
  return (
    <motion.div className='px-6 mt-5' initial = {{y :50 , opacity :0}} animate ={{y :0 , opacity :1}} transition={{duration :0.8}}>
      
      {isActive ? <WashActive/>:<BookWash/> }
    </motion.div>
  )
}

export default GetWash