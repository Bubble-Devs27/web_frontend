import React from 'react'
import PhoneNav from '../Components/Navbars/PhoneNav'
import Hero from '../Components/Home/Hero'
import Divider from '../Components/Divider/Divider'
import GetWash from '../Components/Home/GetWash'
import {Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen'
const HomePage = () => {
  return (
    <>
    <PhoneNav/>
     <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/services" element={<HomeScreen/>} />
        <Route path="/packages" element={<HomeScreen/>} />
        <Route path="/orders" element={<HomeScreen/>} />
        <Route path="/notification" element={<HomeScreen/>} />
        <Route path="/login" element={<HomeScreen/>} />
        <Route path="/account" element={<HomeScreen/>} />
        <Route path="/admin" element={<HomeScreen/>} />
      </Routes>
    
    </>
    
  )
}

export default HomePage