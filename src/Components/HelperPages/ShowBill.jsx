import React from 'react'
import { useCart, useStore } from '../../store/mainStore'
import axios from 'axios'
import { base } from 'motion/react-client'
import { useNavigate } from 'react-router-dom'
const ShowBill = () => {
  const navigate =useNavigate()
  const fullWash = useCart((s)=>s.fullWash)
  const ExteriorWash = useCart((s)=>s.ExteriorWash)
  const smallWash = useCart((s)=>s.smallWash)
  const preferedTime = useCart((s)=>s.preferedTime)
  const preferedDate = useCart((s)=>s.preferedDate)
  const address = useCart((s)=>s.address)
  const token = localStorage.getItem("TOKEN")
  const baseURL = useStore((s)=>s.baseURL)
  const logIn = useCart((S)=>S.logIn)
  const resetStore = useCart((s)=>s.resetStore)
  // const showDetails = () =>{
  //   console.log(fullWash , ExteriorWash , smallWash ,preferedDate ,address ,preferedTime)
  // }
  const payload = {
    token : token ,
    prefTime : preferedTime,
    prefDate :preferedDate,
    address : address,
    price : fullWash*299 + ExteriorWash*199 + smallWash*99,
    payment :'cash',
    order : {full : fullWash ,ext :ExteriorWash ,small : smallWash }
  }
  const bookOrder =async()=>{
    if(token){
        const response = await axios.post(`${baseURL}/order/book` ,payload )
        console.log(response.data)
       resetStore()
        navigate("/")
    }
    else {
      alert("Token expired")
    }
  }
  const bookingData = {
    washCost: {
      items: [
        { name: `Full Wash x ${payload.order.full}`, price: payload.order.full*299 },
        { name: `Full Wash x ${payload.order.ext}`, price:  payload.order.ext*199 },
        { name: `Full Wash ${payload.order.small}`, price:  payload.order.small*99 }
      ],
      total: 400
    },
    fuelCharges: 30,
    platformFee: 30,
    discount: 0,
    finalTotal: 400
  };
  return (
    <div className="bg-orange-50 min-h-screen">
      {/* Phone illustration */}
      {/* <div className="bg-red-900 px-6 py-12 rounded-b-3xl">
        <div className="flex justify-center">
          <div className="relative">
            
            <div className="w-24 h-32 bg-pink-300 rounded-full transform rotate-12 relative">
              <div className="absolute top-4 left-4 w-16 h-24 bg-pink-200 rounded-full"></div>
            </div>
           
            <div className="absolute top-6 left-8 w-12 h-20 bg-teal-400 rounded-lg shadow-lg">
              <div className="w-full h-8 bg-white rounded-t-lg flex items-center justify-center">
                <div className="w-6 h-4 bg-pink-200 rounded"></div>
              </div>
              <div className="p-1">
                <div className="w-full h-2 bg-teal-300 rounded mb-1"></div>
                <div className="w-3/4 h-2 bg-teal-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Pricing Details */}
      <div className="px-6 py-6 ">
        {/* Wash Cost Section */}
        <div className="bg-red-900 text-white rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Wash Cost</h3>
            <span className="font-semibold">₹{payload.price}</span>
          </div>
          
          <div className="space-y-2 text-sm">
            {bookingData.washCost.items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
          
          <hr className="border-red-700 my-3" />
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Fuel Charges</span>
              <span>+ ₹{bookingData.fuelCharges}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Platform fee</span>
              <span>- ₹{bookingData.platformFee}</span>
            </div>
            
            <div className="flex justify-between">
              <span>Discount</span>
              <span>₹ {bookingData.discount}</span>
            </div>
          </div>
        </div>

        {/* Total Section */}
        <div className="flex justify-between items-center border-2 rounded-xl p-2 mt-3 border-red-900">
          <span className="text-xl font-bold text-gray-800">Date</span>
          <span className="text-xl font-bold text-gray-800">{`${payload.prefDate.getDate()}/${payload.prefDate.getMonth()}/${payload.prefDate.getFullYear()}`}</span>
        </div>
        <div className="flex justify-between items-center border-2 rounded-xl p-2 mt-3 border-red-900 ">
          <span className="text-xl font-bold text-gray-800">Time</span>
          <span className="text-xl font-bold text-gray-800">{payload.prefTime.from} - {payload.prefTime.to} </span>
        </div>
        <div className="flex justify-between items-center py-4">
          <span className="text-xl font-bold text-gray-800">TOTAL</span>
          <span className="text-xl font-bold text-gray-800">₹{payload.price}</span>
        </div>

        {/* Book Now Button */}
        <button  onClick={bookOrder}
        className="w-full bg-red-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-800 transition-colors">
          
          BOOK NOW
        </button>
      </div>
    </div>
  )
}

export default ShowBill