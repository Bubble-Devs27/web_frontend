import React from 'react'
import PhoneNav from '../Components/Navbars/PhoneNav'
import Hero from '../Components/Home/Hero'
import Divider from '../Components/Divider/Divider'
import GetWash from '../Components/Home/GetWash'
import {Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen'
import Login from '../AuthPages/Login'
import AskAdress from '../Components/HelperPages/AskAdress'
import Profile from '../ProfilePage/Profile'
import ShowBill from '../Components/HelperPages/ShowBill'
import OrderHistory from '../Components/HelperPages/OrderHistory'
const HomePage = () => {
  return (
    <>
    <PhoneNav/>
     <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/address" element={<AskAdress/>} />
        <Route path="/packages" element={<HomeScreen/>} />
        <Route path="/orders" element={<HomeScreen/>} />
        <Route path="/notification" element={<HomeScreen/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/account" element={<HomeScreen/>} />
        <Route path="/admin" element={<HomeScreen/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/showbill" element={<ShowBill/>} />
        <Route path="/orderhistory" element={<OrderHistory/>} />
        
        
      </Routes>
    
    </>
    
  )
}

export default HomePage