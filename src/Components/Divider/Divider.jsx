import React from "react";
import { motion } from "motion/react";
import pic from "../../assets/divLine.png";
const Divider = () => {
  return (
    <motion.div className="px-6 mt-2"  
     initial={{
        width: 0,
        opacity: 0,
        x: '50%', // center start
        translateX: '-50%' // correct for transform origin
      }}
      animate={{
        width: '100%',
        opacity: 1,
        x: '0%',
        translateX: '0%'
      }}
      transition={{
        duration: 1,
        ease: 'easeOut'
      }}>
      <img src={pic} alt="" />
    </motion.div>
  );
};

export default Divider;
