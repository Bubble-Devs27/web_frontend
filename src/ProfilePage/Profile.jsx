import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { useCart, useStore, useUserDetails } from '../store/mainStore';
import axios from 'axios';

const Profile = () => {
  const navigate = useNavigate();
  const logOut = useCart((s)=>s.logOut)
  const userDetails = useUserDetails((s)=>s.details)
  const [name, setName] = useState(userDetails.name);
  const token =localStorage.getItem("TOKEN")
  const baseURL = useStore((s)=>s.baseURL)
  const setDetails = useUserDetails((s)=>s.setDetails)
  const handleLogout =()=>{
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('cart-storage')
    localStorage.removeItem('user-details-storage')
    logOut()
    navigate('/')
  }
  const handleSave = async() => {
    console.log(name)
   if(name == "" || name !== null || name !== " "){
      const response = await axios.post(`${baseURL}/login/update` , {"token" : token , "name" : name})
      console.log(response.data)
      if(response.status ==200){
          console.log(response.data);
          setDetails(response.data)
      }
      else {
        alert("Try again Later")
      }
   }
   else {
    alert("Enter name ")
   }
  };

  const handleOrderHistory = () => {
   navigate("/orderhistory")
  };
  return (
     <div className="  flex items-center justify-center p-4">
      <div className="w-full max-w-sm  rounded-2xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-medium text-gray-800">Profile</h1>
          <p className="text-[#5D2821] font-bold">+91 {userDetails.Phone}</p>
        </div>

        {/* Order History */}
        <div 
          onClick={handleOrderHistory}
          className="flex items-center justify-between py-3 cursor-pointer bg-amber-50 rounded-lg px-2 transition-colors"
        >
          <span className="text-gray-700  font-medium">order History</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Name Input Section */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              disabled = {userDetails.name !==""}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D2821] focus:border-[#5D2821] bg-white placeholder-gray-400"
            />
            {userDetails.name === "" || userDetails.name === " "  ? 
             <button
              onClick={handleSave}
              className="px-6 py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium"
            >
              Save
            </button>  :<></>
          }
          </div>
        </div>

        {/* Logout Button */}
        <div className="pt-4">
          <button
            onClick={handleLogout}
            className="w-full py-3 bg-amber-800 text-white rounded-lg hover:bg-amber-900 transition-colors font-medium"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile