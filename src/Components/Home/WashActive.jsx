import React from 'react'
import useWashStore from '../../store/liveOrderStore';

const WashActive = () => {
  const order = useWashStore((s)=>s.order)
  const date = new Date(order.prefDate)
   const orderData = {
    otp: "6666",
    steps: [
      {
        id: 1,
        title: "Order Placed",
        date: "14 May, 2025",
        vehicle: "SUV",
        status: "Booked",
        icon: "✓"
      },
      {
        id: 2,
        title: "Order Accepted",
        date: "---",
        vehicle: "",
        status: "current",
        icon: "⏱"
      },
      {
        id: 3,
        title: "Wash Started",
        date: "14 May, 2025",
        vehicle: "SUV",
        status: "pending",
        icon: "⏱"
      }
    ]
  };
  return (
    <div className="bg-[#FEF9ED]  p-5 rounded-xl">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className=" justify-between items-center mb-8">
          <h1 className="text-xl font-bold text-gray-800">YOUR ORDER</h1>
          <div className="flex items-center space-x-2 justify-end">
            <span className="text-gray-600 font-medium">OTP :</span>
            <div className="flex space-x-1">
              <div className="w-8 h-8 bg-red-900 text-white rounded flex items-center justify-center font-bold">6</div>
              <div className="w-8 h-8 bg-red-900 text-white rounded flex items-center justify-center font-bold">6</div>
              <div className="w-8 h-8 bg-red-900 text-white rounded flex items-center justify-center font-bold">6</div>
              <div className="w-8 h-8 bg-red-900 text-white rounded flex items-center justify-center font-bold">6</div>
            </div>
          </div>
        </div>

        {/* Order Steps */}
        <div className="space-y-6 ">
          {/* Step 1: Order Placed */}
          <div className="relative">
            <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300"></div>
            
            <div className="flex items-start space-x-4">
              {/* Status Icon */}
              {order.status == "Booked" ||order.status == "Accepted" || order.status == "Started" ? <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-green-600">
                ✓
              </div>  :  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-gray-600">
                ⏱
              </div>}
             

              {/* Content */}
              <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">
                  Order Placed
                </h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <div>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
                  <div>Time : {order.prefTime.from} - {order.prefTime.to} </div>
                </div>
              </div>

              {/* Right Side Icon/Image Placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Step 2: Order Accepted */}
          <div className="relative">
            <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300"></div>
            
            <div className="flex items-start space-x-4">
              {/* Status Icon */}
             {order.status == "Accepted" || order.status == "Started" ? <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-green-600">
                ✓
              </div> : 
               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-orange-500">
                ⏱
              </div>}

              {/* Content */}
              <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">
                  Order Accepted
                </h3>
                <div className="text-gray-600 text-sm space-y-1">
                   {order.status == "Accepted" ? <> <div>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
                  <div>Time : {order.prefTime.from} - {order.prefTime.to} </div></> :   <div>---</div>}
                </div>
              </div>

              {/* Right Side Icon/Image Placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-orange-500 text-xl"></div>
              </div>
            </div>
          </div>

          {/* Step 3: Wash Started */}
          <div className="relative">
            <div className="flex items-start space-x-4">
              {/* Status Icon */}
               {order.status == "Started" ? <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-green-600">
                ✓
              </div> : 
               <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold relative z-10 bg-orange-500">
                ⏱
              </div>}

              {/* Content */}
              <div className="flex-1 bg-white rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-gray-800 text-lg mb-2">
                  Wash Started
                </h3>
                <div className="text-gray-600 text-sm space-y-1">
                  {order.status == "Started" ? <> <div>Date : {date.getDate()}/{date.getMonth()}/{date.getFullYear()}</div>
                  <div>Time : {order.prefTime.from}  </div></> :   <div>---</div>}
                </div>
              </div>

              {/* Right Side Icon/Image Placeholder */}
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WashActive