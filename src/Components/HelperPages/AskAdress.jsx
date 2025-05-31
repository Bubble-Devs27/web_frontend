
import React, { useState, useEffect } from 'react';
import { useCart } from '../../store/mainStore'
import { Calendar, Clock } from 'lucide-react';
import 'react-datepicker/dist/react-datepicker.css';
import { MapPin, ChevronDown } from 'lucide-react';
// import './datepicker.css'; // Optional custom CSS
import { setDate } from 'date-fns';
import { useNavigate } from 'react-router-dom';
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
    maxWidth: '300px',
    margin: 'auto',
    textAlign: 'center',
  },
  label: {
    marginBottom: '10px',
  },
};
const AskAdress = () => {
  const [address ,setadd] =useState('')
  const [second ,setSecond] =useState(true)
  //store actions
  const setAddress = useCart((state)=>state.addAddress)
  const addTime = useCart((state)=>state.addTime)
  const addDate = useCart((state)=>state.addDate)

  const navigate = useNavigate()

  //For Address section Actions
  const [formData, setFormData] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    
  });
   const handleClick = ()=>{
    if(formData .addressLine1 !== '' && formData.city !== "" && formData.state !== "" ){
    setAddress(formData)
    alert("address Saved")
    navigate("/showbill")
  }
  else {
   alert("Please fill all details")
  }
  

 }
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const countries = [
    'India',
   
    // Add more countries as needed
  ];

  const cities = [
    'Hoshiarpur',
    // Add more cities as needed
  ];

  const states = [
   'Punjab'
    // Add more states as needed
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  // LOCATIONLOGIN ***************************************
    const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    address: '',
    city: '',
    state: '',
    error: ''
  });
  useEffect(() => {
    // Step 1: Get user's coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Step 2: Use OpenStreetMap's Nominatim API to get address
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
              {
                headers: {
                  'User-Agent': 'your-app-name (your-email@example.com)' // Required by OSM usage policy
                }
              }
            );

            const data = await response.json();
            const address = data.address;

            setLocation({
              latitude: lat,
              longitude: lon,
              address: data.display_name || '',
              city: address.city || address.town || address.village || '',
              state: address.state || '',
              error: ''
            });
          } catch (err) {
            setLocation(prev => ({ ...prev, error: 'Failed to fetch address' }));
          }
        },
        (error) => {
          setLocation(prev => ({ ...prev, error: 'Geolocation permission denied or unavailable' }));
        }
      );
    } else {
      setLocation(prev => ({ ...prev, error: 'Geolocation not supported' }));
    }
  }, []);

  const handleCurrentLocation = () => {
   console.log(location)
   setFormData(prev=>({...prev,addressLine1 : location.address , city : location.city , state : location.state}))
  };

  const handleSave = () => {
    console.log('Saving address:', formData);
    // Handle form submission here
  };

 //ADRESS LOGIC FINISHED ************************




  const AskTime = () =>{
  const [selectedDate, setSelectedDate] = useState(null);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [dates, setDates] = useState([]);
  
    useEffect(() => {
    // Generate 7 dates starting from today
    const today = new Date();
    
    const dateList = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dateList.push({
        date: date.getDate(),
        day: date.toLocaleDateString('en-US', { weekday: 'short' }),
        fullDate: date
      });
    }
    
    setDates(dateList);
    setSelectedDate(0); // Select today by default
    
    // Set default from time (2 hours from now)
    const now = new Date();
    now.setHours(now.getHours() + 2);
    const defaultTime = now.toTimeString().slice(0, 5);
    setFromTime(defaultTime);
  }, []);
  const handleDateSelect = (index) => {
    setSelectedDate(index);
  };
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(time);
      }
    }
    return options;
  };

  const handleClickBut = () =>{
    if(selectedDate != null && fromTime != '' && toTime != ''){
      addDate(dates[selectedDate].fullDate)
      addTime({from : fromTime, to : toTime})
      setSecond(false)
    }
    else {
      alert('Please select all details')
    }
  }
  const timeOptions = generateTimeOptions();
    return (
       <div className="max-w-sm mx-auto   p-4">
      {/* Calendar Header */}
      <div className="flex justify-center mb-6">
        <div className="bg-red-500 rounded-t-lg px-4 py-2 relative">
          <div className="absolute -top-2 left-2 w-3 h-6 bg-gray-600 rounded-sm"></div>
          <div className="absolute -top-2 right-2 w-3 h-6 bg-gray-600 rounded-sm"></div>
          <div className="bg-white rounded-b-lg px-6 py-4 mt-2 shadow-lg">
            <div className="text-4xl font-bold text-center">22</div>
          </div>
        </div>
      </div>

      {/* Select Date Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">Select Date</h2>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {dates.slice(0, 5).map((dateObj, index) => (
            <button
              key={index}
              onClick={() => handleDateSelect(index)}
              className={`p-3 rounded-lg text-center transition-colors ${
                selectedDate === index
                  ? 'bg-amber-800 text-white'
                  : 'bg-[#FEF9ED] text-gray-700 hover:bg-orange-200'
              }`}
            >
              <div className="text-xs font-medium">{dateObj.day}</div>
              <div className="text-lg font-bold">{dateObj.date}</div>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {dates.slice(5, 7).map((dateObj, index) => (
            <button
              key={index + 5}
              onClick={() => handleDateSelect(index + 5)}
              className={`p-3 rounded-lg text-center transition-colors ${
                selectedDate === index + 5
                  ? 'bg-amber-800 text-white'
                  : 'bg-[#FEF9ED] text-gray-700 hover:bg-orange-200'
              }`}
            >
              <div className="text-xs font-medium">{dateObj.day}</div>
              <div className="text-lg font-bold">{dateObj.date}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Select Time Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-center mb-4 text-gray-800">Select Time</h2>
        
        <div className="space-y-4">
          {/* From Time */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-800 text-white px-3 py-2 rounded-md font-medium min-w-[60px] text-center">
              From
            </div>
            <div className="flex-1 relative">
              <select
                value={fromTime}
                onChange={(e) => setFromTime(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-amber-800 focus:outline-none bg-white appearance-none cursor-pointer"
              >
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* To Time */}
          <div className="flex items-center gap-3">
            <div className="bg-amber-800 text-white px-3 py-2 rounded-md font-medium min-w-[60px] text-center">
              To
            </div>
            <div className="flex-1 relative">
              <select
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-md focus:border-amber-800 focus:outline-none bg-white appearance-none cursor-pointer"
              >
                <option value="">Select time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-3 text-center">
          *Book time is just an estimate, not a exact deadline.
        </p>
      </div>

      {/* Continue Button */}
      <button onClick={handleClickBut}
      className="w-full bg-amber-800 text-white py-4 rounded-md font-semibold text-lg hover:bg-amber-900 transition-colors shadow-lg">
        CONTINUE
      </button>
    </div>
    )
  }
  

  return (
    <div className='w-full '>
      {second ?   
    //    <div style={styles.container}>
    //   <h2 style={styles.label}>Select Date and Time</h2>
    //   <DatePicker
    //     selected={selectedDate}
    //     onChange={(date) => setSelectedDate(date)}
    //     showTimeSelect
    //     timeFormat="HH:mm"
    //     timeIntervals={15}
    //     dateFormat="MMMM d, yyyy h:mm aa"
    //     className="datepicker-input border-2 p-2 rounded-xl"  
    //   />
    //   <div onClick={handleClickTime} className='bg-red-50 py-2 px-4 mt-10'>Click</div>
    // </div>
      <AskTime/>
      : 
       <div className="max-w-md mx-auto  ">
      {/* Header */}
      <div className="p-4">
        <h1 className="text-xl font-semibold text-[#5D2821]">Add new address</h1>
      </div>

      {/* Form Content */}
      <div className="p-4 space-y-6">
        {/* Use Current Location Button */}
        <button
          onClick={handleCurrentLocation}
          className={`w-full flex items-center justify-center gap-3 p-4 rounded-lg border transition-colors ${
            useCurrentLocation
              ? 'bg-[#5D2821] border-[#5D2821] border-2 text-white'
              : ' border-[#5D2821] border-2 text-gray-700 hover:text-white hover:bg-[#5D2821]'
          }`}
        >
          <MapPin className="w-5 h-5" />
          <span className="font-medium">Use Current Location</span>
        </button>

        {/* Country Field */}
        {/* Address Line 1 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            Address Line 1
          </label>
          <input
            type="text"
            value={formData.addressLine1}
            onChange={(e) => handleInputChange('addressLine1', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter address"
          />
        </div>
        {/* Address Line 2 */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            Address Line 2 (optional)
          </label>
          <input
            type="text"
            value={formData.addressLine2}
            onChange={(e) => handleInputChange('addressLine2', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Apartment, suite, etc."
          />
        </div>

        {/* City Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            City
          </label>
          <div className="relative">
            <select
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* State Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-900">
            State
          </label>
          <div className="relative">
            <select
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Zip Code Field */}
       
      </div>

      {/* Save Button */}
      <div className="p-4 border-t border-gray-200 mt-8">
        <button
          onClick={handleClick}
          className="w-full bg-[#5D2821] text-white py-4 rounded-lg font-medium text-lg hover:bg-[#5D2821] transition-colors"
        >
          Save & Continue
        </button>
      </div>
    </div>
      }
    </div>
  )
}

export default AskAdress

