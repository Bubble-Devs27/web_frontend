import React, { useState, useEffect } from 'react';
import './index.css'
import SplashScreen from './SplashScreen/SplashScreen';
import HomePage from '../src/HomePage/HomePage';
function App() {
   const [isLoading, setIsLoading] = useState(true);
   
  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);


  return (
   <>
   {isLoading ? <SplashScreen/> : <HomePage/>}
 
   </>
  );
}

export default App;
