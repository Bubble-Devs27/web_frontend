import React from 'react'
import { motion } from "motion/react";
import '@fontsource-variable/lora';
const GetWash = () => {
  return (
    <motion.div className='px-6 mt-5' initial = {{y :50 , opacity :0}} animate ={{y :0 , opacity :1}} transition={{duration :0.8}}>
        <div className='text-black font-semibold text-2xl' style={{fontFamily :'Lora Variable'}}>Get a car wash at your home</div>
    </motion.div>
  )
}

export default GetWash