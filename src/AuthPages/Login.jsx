import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import '@fontsource/anton';
import { useCart, useStore, useUserDetails } from '../store/mainStore';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [activeTab, setActiveTab] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState('');
  const [updates, setUpdates] = useState(false);
  const [otpSent , setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [otp ,setOtp] = useState()
  const navigate = useNavigate()
 const baseURL = useStore((state)=>state.baseURL)
 const logIn = useCart((s)=>s.logIn)
 const setUser = useUserDetails((s)=>s.setDetails)
  const handleVerify = async()=>{
      if(otp >= 1000 && otp <= 9999){
        const response = await axios.post(`${baseURL}/login/phone` , {Phone : phoneNumber , otp : otp})
        if(response.status == 200 || response.status ==201){
          localStorage.setItem("TOKEN" ,response.data.token)
          console.log("from login" , response.data.details.name)
          setUser(response.data.details)
          logIn()
          navigate("/")
        }
        else {
          alert('Otp not matched')
          setOtp('')
        }
      }
      else {
        alert('Invalid OTP');
        setOtp('')
      }
  }

  return (
    <div className=" h-[80vh]  flex items-center justify-center p-4">
      <div className="w-full max-w-sm  rounded-lg p-6">
        {/* Header */}
        <h1 className="text-center text-stone-800 text-lg  font-medium mb-8 tracking-wide">
          WELCOME USER
        </h1>

        {/* Tab Buttons */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab('phone')}
            className={`flex-1 py-3 px-6 rounded-l-full text-sm font-medium transition-colors ${
              activeTab === 'phone'
                ? 'bg-[#5D2821] text-white'
                : 'bg-[#FEF9ED] text-stone-600 hover:bg-stone-300'
            }`}
          >
            Phone Number
          </button>
          <button
            onClick={() => setActiveTab('email')}
            className={`flex-1 py-3 px-6 rounded-r-full text-sm font-medium transition-colors ${
              activeTab === 'email'
                ? 'bg-[#5D2821] text-white'
                : 'bg-[#FEF9ED] text-stone-600 hover:bg-stone-300'
            }`}
          >
            Email
          </button>
        </div>

        {/* Form Content */}
        {activeTab === 'phone' ? (
          <div className="space-y-6">
            {/* Phone Input Section */}
            <div>
              <label className="block text-stone-700 text-sm font-medium mb-3">
                Enter Phone
              </label>
              <div className="relative">
                <div className="flex items-center border border-stone-300 rounded-full bg-white">
                  <div className="flex items-center px-4 py-3 border-r border-stone-300">
                    <Phone className="w-4 h-4 text-stone-500 mr-2" />
                    <span className="text-stone-600 text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-stone-800"
                    placeholder=""
                  />
                </div>
              </div>

               {/* ***********************OTP Input Section *********************** */}
             {otpSent ? <>
              <label className="block text-stone-700 text-sm font-medium mb-2 mt-5">
                Enter OTP
              </label>
               <div className="relative">
                <div className="flex items-center border border-stone-300 rounded-full bg-white">
                  <input
                    type="tel"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-stone-800"
                    placeholder=""
                  />
                </div>
              </div>
             </> :<></>}


            </div>

            {/* Get OTP Button */}
            {otpSent ?  <button className="w-full bg-[#5D2821] text-white py-4 rounded-full font-medium text-sm hover:bg-amber-800 transition-colors" onClick={handleVerify}>
              Verify
            </button> :<>
            <button className="w-full bg-[#5D2821] text-white py-4 rounded-full font-medium text-sm hover:bg-amber-800 transition-colors" onClick={() => setOtpSent(true)}> 
              GET OTP
            </button>
            </>}

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="updates"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="mt-1 w-4 h-4 bg-[#5D2821] border-stone-300 rounded focus:ring-amber-900"
              />
              <label htmlFor="updates" className="text-xs text-stone-600 leading-relaxed">
                Get regular updates about new offers, services etc.
              </label>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Email Input Section */}
            <div>
              <label className="block text-stone-700 text-sm font-medium mb-3">
                Enter Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-stone-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent text-stone-800"
                  placeholder="your@email.com"
                />
              </div>
              <p className="text-xs text-stone-500 mt-2">
                *Your Email is encrypted
              </p>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-amber-900 text-white py-4 rounded-full font-medium text-sm hover:bg-amber-800 transition-colors">
              CONTINUE
            </button>

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="email-updates"
                checked={updates}
                onChange={(e) => setUpdates(e.target.checked)}
                className="mt-1 w-4 h-4 text-amber-900 border-stone-300 rounded focus:ring-amber-900"
              />
              <label htmlFor="email-updates" className="text-xs text-stone-600 leading-relaxed">
                Get regular updates about new offers, services etc.
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}