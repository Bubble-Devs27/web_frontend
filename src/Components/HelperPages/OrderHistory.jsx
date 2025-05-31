import React, { useEffect, useState } from 'react'
import { useStore } from '../../store/mainStore'
import axios from 'axios'

const OrderHistory = () => {
    const token =localStorage.getItem("TOKEN")
    const baseURL = useStore((s)=>s.baseURL)
    const [orders, setOrders] =useState()
    const [loading ,setLoading] = useState(true)
    const orderData = [
    {
      id: 1,
      status: "Completed",
      bookedOn: "12/4/2025",
      completedOn: "12/4/2025",
      fullWash: 1,
      extWash: 0,
      smallWash: 1,
      totalAmount: 400
    },
    {
      id: 2,
      status: "Completed",
      bookedOn: "12/4/2025",
      completedOn: "12/4/2025",
      fullWash: 1,
      extWash: 0,
      smallWash: 1,
      totalAmount: 400
    },
    {
      id: 3,
      status: "Pending",
      bookedOn: "15/4/2025",
      completedOn: null,
      fullWash: 2,
      extWash: 1,
      smallWash: 0,
      totalAmount: 600
    },
    {
      id: 4,
      status: "Completed",
      bookedOn: "10/4/2025",
      completedOn: "11/4/2025",
      fullWash: 0,
      extWash: 2,
      smallWash: 2,
      totalAmount: 350
    }
  ];
    const getHistory = async() =>{
        console.log("req Sent")
        const result = await axios.post(`${baseURL}/order/history` , {token})
        if(result){
           console.log(result.data[0])
            setOrders(result.data)
            setLoading(false)
        }
    }
    
    useEffect(()=>{
        getHistory()
    },[])
  if(loading) {
    return (<h1>Loading</h1>)
  }
  return (
      <div className="bg-orange-50 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-orange-50">
        <h1 className="text-2xl font-bold text-amber-900 text-center mb-8">
          Order History
        </h1>
        
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order._id} className=" rounded-lg p-4 shadow-sm border border-orange-100">
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex justify-between">
                  <span className="font-medium">Status :</span>
                  <span className={`font-medium ${
                    order.status === 'Completed' ? 'text-green-700' : 'text-orange-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Booked on :</span>
                  <span>{order.prefDate}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Completed on :</span>
                  <span>{order.completedOn || 'N/A'}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Full wash :</span>
                  <span>{order.order.full}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Ext wash :</span>
                  <span>{order.order.ext}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Small Wash :</span>
                  <span>{order.order.small}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-orange-200">
                  <span className="font-bold text-base">Total:</span>
                  <span className="font-bold text-lg text-amber-900">₹{order.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    
  )
}

export default OrderHistory