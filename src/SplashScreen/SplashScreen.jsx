import React from "react";
import { motion } from "motion/react";
const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-50">
      <div className="text-center px-8">
        <motion.h1 className="text-4xl font-bold mb-2 text-red-900" initial ={{y : -10 , opacity :0}} animate={{y : 0 , opacity :1}} transition={{duration : 0.9 , delay : 0.3}} >
          CAR WASH
        </motion.h1>
        <motion.div className="text-xl font-medium text-stone-400 tracking-wide" initial ={{y : 80 , opacity :0}} animate={{y : 0 , opacity :1}} transition={{duration : 0.9 , delay : 0.5}}>
          <div>AT</div>
          <div>YOUR</div>
          <div>DOORSTEP</div>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
