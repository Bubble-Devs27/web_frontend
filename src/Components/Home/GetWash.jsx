import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react";
import '@fontsource-variable/lora';
import BookWash from './BookWash';
import WashActive from './WashActive';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner'

import { useStore } from '../../store/mainStore';
import useWashStore from '../../store/liveOrderStore';
import OrderHistory from '../HelperPages/OrderHistory';
const GetWash = () => {
  let isPolling = false;
  let pollingTimeoutId = null;
  const [isActive , setActive] = useState(false)
  const [loading , setLoading] = useState(true)
  const baseURL = useStore((state)=>state.baseURL)
  const setOrder =useWashStore((s)=>s.setOrder)
  //Check if Token available? then check if wash Booked ?  yes => show wash details , No => show wash booking form
  const getWashDetails = async(token) =>{
    const response = await axios.post(`${baseURL}/order/status` , {token : token})

    if(response.status === 200){
      setOrder(response.data)
      setLoading(false)
      setActive(true)
      if(response.data.status == "Booked" || response.data.status =="Accepted"){
        startPolling(token)
        console.log(response.data.status)
        
      }
      else {
        setActive(false)
        stopPolling()
        console.log(response.data.status)
      }
    }
    else {
      setLoading(false)
    }
  }
 function startPolling(token) {
  if (isPolling) {
    
    return;
  }

  isPolling = true;

  const poll = async () => {
    if (!isPolling) return;

    await getWashDetails(token); // Wait for the request to finish

    if (isPolling) {
      pollingTimeoutId = setTimeout(() => poll(), 10000); // 10 seconds
    }
  };

  poll();
}
function stopPolling() {
  isPolling = false;
  if (pollingTimeoutId) {
    clearTimeout(pollingTimeoutId);
    pollingTimeoutId = null;
  }
}
  useEffect(()=>{
     const token = localStorage.getItem("TOKEN")

      if(token){
        getWashDetails(token)
        
      }
      else {
        setLoading(false)
      }
  },[])
  if(loading){
    return(
    <div className='w-full h-[30vh]  flex flex-col justify-center items-center'>
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      <div className=''>Please wait! While we load</div>
    </div>
    )
  }
  return (
    <motion.div className='px-6 mt-5' initial = {{y :50 , opacity :0}} animate ={{y :0 , opacity :1}} transition={{duration :0.8}}>
      
      {isActive ? <WashActive/>:<BookWash/> }
    </motion.div>
  )
}

export default GetWash